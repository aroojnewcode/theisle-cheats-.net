export interface IsleSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

/** The Isle gameplay screenshots (Supabase CDN). */
export const ISLE_CDN_IMAGES = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793458663436-u7jj0r-isle3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793458600681-movakg-isle2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/1242b160-0414-44df-95cc-e45319c48f50/1793307520290-zkpozf-screenshot-4.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/1242b160-0414-44df-95cc-e45319c48f50/1793306996991-hmhqkp-the-isle-screenshot-3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/1242b160-0414-44df-95cc-e45319c48f50/1793306976922-9sc5wv-the-isle-screenshot-1-320.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793197906700-a4j9p0-images-3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793193999064-29d39t-pussycat-isle-s1.webp',
] as const;

const ISLE_SLIDE_META: Omit<IsleSlide, 'src'>[] = [
  {
    alt: 'The Isle Evrima cheat overlay with player and dinosaur ESP across a forest valley',
    caption: 'Player & dino ESP',
    captionDesc: 'NovaXware boxes and distance readouts on live terrain.',
  },
  {
    alt: 'NovaXware menu open during The Isle growth session with hunger and stamina HUD visible',
    caption: 'NovaXware HUD',
    captionDesc: 'Module tabs during an Evrima survival session.',
  },
  {
    alt: 'The Isle screenshot showing ESP markers and combat UI during a pack hunt on official servers',
    caption: 'Pack hunt',
    captionDesc: 'Radar and ESP combined for open-world PvP.',
  },
  {
    alt: 'The Isle Evrima shoreline with cheat radar dots and player awareness overlay',
    caption: 'Shoreline radar',
    captionDesc: 'Mini-radar tuned for nest routes and water sources.',
  },
  {
    alt: 'The Isle juvenile dinosaur gameplay with NovaXware combat assist settings on screen',
    caption: 'Growth route',
    captionDesc: 'Conservative presets while you grow to adult.',
  },
  {
    alt: 'The Isle carcass and resource ESP markers with overlay modules enabled',
    caption: 'Resource ESP',
    captionDesc: 'Corpse, water and food hints for faster growth.',
  },
  {
    alt: 'The Isle live hunt with bite combat assist and survivor ESP in one session',
    caption: 'Live hunt',
    captionDesc: 'Combat assist and ESP during an Evrima fight.',
  },
];

export const isleSlides: IsleSlide[] = ISLE_CDN_IMAGES.map((src, i) => ({
  src,
  ...ISLE_SLIDE_META[i]!,
}));

/** Homepage hero carousel — excludes 3rd slide (Pack hunt). */
export const heroSlides = isleSlides.filter((_, i) => i !== 2);

export function isleBlogImage(index: number): string {
  return ISLE_CDN_IMAGES[index % ISLE_CDN_IMAGES.length]!;
}

export const BLOG_GAMEPLAY_HERO_IMAGES = {
  espBoss: ISLE_CDN_IMAGES[0]!,
  espCemetery: ISLE_CDN_IMAGES[1]!,
  combatPurple: ISLE_CDN_IMAGES[2]!,
  combatPlateau: ISLE_CDN_IMAGES[3]!,
} as const;

function pick(index: number): IsleSlide {
  return isleSlides[index % isleSlides.length]!;
}

/** Product detail / feature galleries — keys preserved for products.ts slide(). */
export const galleryRaw = {
  gpHeroEspBoss: pick(0),
  gpHeroEspCemetery: pick(1),
  gpHeroCombatPurple: pick(2),
  gpHeroCombatPlateau: pick(3),
  gpHeroHome: pick(4),
  gpMapHack: pick(0),
  gpScripts: pick(1),
  gpZoomHack: pick(3),
  gpSkinChanger: pick(1),
  gpAutoKill: pick(4),
  gpFarmBot: pick(5),
  gpHeroEsp: pick(2),
  gpThermal: pick(6),
  gpBuildFight: pick(1),
  gpArena: pick(3),
  gpSpawn: pick(4),
  gpLongRange: pick(0),
  gpAimLock: pick(4),
  gpChams: pick(6),
  gpSquad: pick(2),
  gpCombat: pick(6),
} as const;

export type GalleryKey = keyof typeof galleryRaw;
