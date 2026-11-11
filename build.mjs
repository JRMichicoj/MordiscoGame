import { minify } from 'terser';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const PLACEHOLDER = '/*__GAME_SCRIPT__*/';

const gamePath = join(root, 'src', 'game.js');
const templatePath = join(root, 'src', 'index.html');
const distPath = join(root, 'dist', 'index.html');

const template = readFileSync(templatePath, 'utf8');
if (!template.includes(PLACEHOLDER)) throw new Error('No se encontro el placeholder en src/index.html');

const result = await minify(readFileSync(gamePath, 'utf8'), {
  compress: { passes: 3, unsafe_math: true, unsafe_arrows: true, pure_getters: true },
  mangle: true,
  ecma: 2020,
  format: { comments: false }
});
if (!result.code) throw new Error('Terser no genero codigo');

const code = result.code.replace(/<\/script/gi, '<\\/script');
const html = template.replace(PLACEHOLDER, code);

mkdirSync(dirname(distPath), { recursive: true });
writeFileSync(distPath, html, 'utf8');
const distBytes = Buffer.byteLength(html, 'utf8');
const scriptBytes = Buffer.byteLength(code, 'utf8');
const LIMIT = 32000;

console.log(`JS minified: ${scriptBytes} bytes`);
console.log(`Dist HTML:   ${distBytes} / ${LIMIT} bytes (${LIMIT - distBytes} libres)`);
if (distBytes > LIMIT) {
  console.error('ERROR: supera el limite de 32,000 bytes');
  process.exit(1);
}
