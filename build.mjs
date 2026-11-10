import { minify } from 'terser';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const PLACEHOLDER = '/*__GAME_SCRIPT__*/';

const originalPath = join(root, 'original', 'index.html');
const gamePath = join(root, 'src', 'game.js');
const templatePath = join(root, 'src', 'index.html');
const distPath = join(root, 'dist', 'index.html');

const original = readFileSync(originalPath, 'utf8');
const template = readFileSync(templatePath, 'utf8');
if (!template.includes(PLACEHOLDER)) throw new Error('No se encontro el placeholder en src/index.html');

const result = await minify(readFileSync(gamePath, 'utf8'), {
  compress: { passes: 3 },
  mangle: true,
  ecma: 2020,
  format: { comments: false }
});
if (!result.code) throw new Error('Terser no genero codigo');

const code = result.code.replace(/<\/script/gi, '<\\/script');
const html = template.replace(PLACEHOLDER, code);
writeFileSync(distPath, html, 'utf8');

const originalBytes = Buffer.byteLength(original, 'utf8');
const distBytes = Buffer.byteLength(html, 'utf8');
const scriptBytes = Buffer.byteLength(code, 'utf8');

console.log(`Original:    ${originalBytes} bytes`);
console.log(`JS minified: ${scriptBytes} bytes`);
console.log(`Dist HTML:   ${distBytes} bytes`);
console.log(`Diferencia:  ${distBytes - originalBytes} bytes`);
if (distBytes > 32768) console.warn('ADVERTENCIA: supera 32 KiB');
if (distBytes > 32000) console.warn('ADVERTENCIA: supera 32,000 bytes');
