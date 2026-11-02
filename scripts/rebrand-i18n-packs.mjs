import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function rebrand(text) {
  return text
    .replaceAll('buyaion2cheats.net', 'theisle-cheats.net')
    .replaceAll('support@buyaion2cheats.net', 'support@theisle-cheats.net')
    .replaceAll('/products/aion-2-cheats', '/products/the-isle-cheats')
    .replaceAll('/go/aion-2/', '/products/the-isle-cheats/')
    .replaceAll('Aion 2 Cheats', 'The Isle Cheats')
    .replaceAll('aion 2 cheats', 'The Isle cheats')
    .replaceAll('Aion 2 Lite', 'The Isle Lite')
    .replaceAll('Aion 2 Pro', 'The Isle Pro')
    .replaceAll('Aion 2 Elite', 'The Isle Elite')
    .replaceAll('Aion 2', 'The Isle')
    .replaceAll('NCSOFT', 'EAC')
    .replaceAll('Abyss', 'Evrima')
    .replaceAll('Costume Changer', 'Skin preview')
    .replaceAll('costume changer', 'skin preview')
    .replaceAll('deep 淵', 'Evrima')
    .replaceAll('深淵', 'Evrima')
    .replaceAll('天魔', 'Evrima');
}

function rebrandFile(path) {
  const next = rebrand(readFileSync(path, 'utf8'));
  writeFileSync(path, next);
  console.log('Rebranded', path);
}

rebrandFile(join(root, 'src/data/forum.ts'));
rebrandFile(join(root, 'src/i18n/seo-locales.ts'));

for (const dir of ['src/i18n/blog/locales', 'src/i18n/faq/locales', 'src/i18n/forum/locales']) {
  const full = join(root, dir);
  for (const name of readdirSync(full)) {
    if (name.endsWith('.ts') && name !== 'types.ts') rebrandFile(join(full, name));
  }
}
