import sharp from 'sharp';
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const input =
  process.argv[2] ??
  join(
    process.env.USERPROFILE ?? '',
    '.cursor/projects/c-Users-DELL-7280-Documents-the-isle-cheats/assets/image-a4c3d062-ee32-46ae-9b91-acc4987e10d1.png',
  );
const publicDir = join(root, 'public');
mkdirSync(publicDir, { recursive: true });

const master = join(publicDir, 'brand-icon.png');
copyFileSync(input, master);

const sizes = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['favicon-512.png', 512],
];

for (const [name, size] of sizes) {
  await sharp(master)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(join(publicDir, name));
}

await sharp(master).resize(32, 32).png().toFile(join(publicDir, 'favicon.ico'));

console.log('Favicons written to', publicDir);
