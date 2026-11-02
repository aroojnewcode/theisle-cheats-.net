import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function rebrand(text) {
  return text
    .replaceAll('buyaion2cheats.net', 'theisle-cheats.net')
    .replaceAll('support@buyaion2cheats.net', 'support@theisle-cheats.net')
    .replaceAll('/products/aion-2-cheats', '/products/the-isle-cheats')
    .replaceAll('Aion 2 Cheats', 'The Isle Cheats')
    .replaceAll('aion 2 cheats', 'The Isle cheats')
    .replaceAll('Aion 2 Lite', 'The Isle Lite')
    .replaceAll('Aion 2 Pro', 'The Isle Pro')
    .replaceAll('Aion 2 Elite', 'The Isle Elite')
    .replaceAll('Aion 2', 'The Isle')
    .replaceAll('NCSOFT', 'EAC')
    .replaceAll('aion2SystemRequirements', 'isleSystemRequirements')
    .replaceAll("'aion-2-cheats'", "'the-isle-cheats'")
    .replaceAll('Abyss', 'Evrima')
    .replaceAll('Elyos / Asmodian', 'Pack / solo')
    .replaceAll('Elyos vs Asmodian', 'survival PvP')
    .replaceAll('Gladiator, Ranger, Sorcerer, Assassin', 'carnivore, herbivore and mixed roles')
    .replaceAll('Costume Changer', 'Skin preview')
    .replaceAll('costume changer', 'skin preview')
    .replaceAll('PURPLE launcher', 'Steam client')
    .replaceAll('Aion 2 / Steam client', 'The Isle Evrima / Steam');
}

for (const rel of ['src/i18n/en.ts', 'src/data/products.ts']) {
  const path = join(root, rel);
  const next = rebrand(readFileSync(path, 'utf8'));
  writeFileSync(path, next);
  console.log('Rebranded', rel);
}
