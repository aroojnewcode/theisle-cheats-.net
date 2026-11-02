import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const target = path.join(__dirname, '../src/i18n/locales/pt-br.ts');

const cp1252 = [
  0x20ac, 0x0081, 0x201a, 0x0192, 0x201e, 0x2026, 0x2020, 0x2021, 0x02c6, 0x2030, 0x0160, 0x2039,
  0x0152, 0x008d, 0x017d, 0x008f, 0x0090, 0x2018, 0x2019, 0x201c, 0x201d, 0x2022, 0x2013, 0x2014,
  0x02dc, 0x2122, 0x0161, 0x203a, 0x0153, 0x009d, 0x017e, 0x0178,
];

function decodeMixedUtf8(buf) {
  const out = [];
  for (let i = 0; i < buf.length; i++) {
    const b = buf[i];
    if (b < 0x80) {
      out.push(String.fromCharCode(b));
      continue;
    }
    if (b >= 0xc0) {
      const len = b >= 0xf0 ? 4 : b >= 0xe0 ? 3 : 2;
      try {
        const decoded = new TextDecoder('utf-8', { fatal: true }).decode(buf.subarray(i, i + len));
        out.push(decoded);
        i += len - 1;
        continue;
      } catch {
        /* fall through */
      }
    }
    if (b >= 0x80 && b <= 0x9f) {
      out.push(String.fromCharCode(cp1252[b - 0x80] ?? b));
    } else {
      out.push(String.fromCharCode(b));
    }
  }
  return out.join('');
}

const raw = fs.readFileSync(target);
const fixed = decodeMixedUtf8(raw);
fs.writeFileSync(target, fixed, 'utf8');
new TextDecoder('utf-8', { fatal: true }).decode(Buffer.from(fixed, 'utf8'));
console.log('pt-br.ts UTF-8 OK');
