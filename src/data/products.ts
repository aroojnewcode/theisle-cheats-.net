import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import type { IconName } from '../components/icons/types';
import { galleryRaw, type GalleryKey } from './isleMedia';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  lite: ['aion-2-esp-wallhack-setup', 'aion-2-lite-vs-pro', 'aion-2-radar-hack-guide', 'anticheat-patch-day-checklist'],
  pro: [
    'aion-2-aimbot-pvp-guide',
    'aion-2-skill-script-guide',
    'aion-2-lite-vs-pro',
    'aion-2-stream-proof-setup',
  ],
  elite: [
    'aion-2-elite-tier-guide',
    'aion-2-cheats-features-guide',
    'aion-2-esp-wallhack-setup',
    'anticheat-patch-day-checklist',
    'how-to-buy-aion-2-cheats-2026',
  ],
  'hwid-spoofer': [
    'aion-2-hwid-spoofer-after-ban',
    'anticheat-bypass-aion-2-guide',
    'anticheat-patch-day-checklist',
    'aion-2-external-cheat-guide',
  ],
  ugc: [
    'anticheat-bypass-aion-2-guide',
    'aion-2-hwid-spoofer-after-ban',
    'how-to-buy-aion-2-cheats-2026',
  ],
  'unlock-all': [
    'aion-2-costume-changer-guide',
    'aion-2-cheats-features-guide',
    'aion-2-stream-proof-setup',
  ],
};

const productBase = '/products/the-isle-cheats/';

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Review current status',
    desc: 'Check the live banner on theisle-cheats.net and Discord #status before purchase—especially after an The Isle or anti-cheat update.',
  },
  {
    num: '02',
    title: 'Choose your access tier',
    desc: 'Select Elite The Isle cheats or the utility that matches your goal. Review the feature list before checkout via our secure checkout.',
  },
  {
    num: '03',
    title: 'Contact the team',
    desc: 'Open Discord and confirm availability, EAC platform, and payment details with your order email ready.',
  },
  {
    num: '04',
    title: 'Follow guided setup',
    desc: 'Use only the operator portal, patch loader, and setup guide. Test in a safe zone, load presets, then enter Evrima or instances.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'The Isle and anti-cheat receive frequent updates. Confirm module availability on the live status panel at theisle-cheats.net before you purchase or launch. Overlay behavior may differ in lobbies, replays and spectator mode after patches.';

const sharedLimitations =
  'Third-party software in The Isle can violate EAC Terms of Service and lead to anti-cheat bans or account action. You use this software at your own risk. Compatibility and availability can change after game, anti-cheat, or Windows updates without notice.';

const isleSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: 'Supported 64-bit edition of Windows 10 or Windows 11.' },
  { icon: 'reqNcsoft', text: 'Current The Isle client via the official launcher with latest patches applied.' },
  { icon: 'reqSettings', text: 'Administrator access for loader installation and patch updates.' },
  { icon: 'reqWifi', text: 'Stable internet connection for portal access and patch delivery.' },
  { icon: 'reqCpu', text: 'A system that meets The Isle published hardware requirements.' },
];

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'the-isle-cheats';
}

const tierAbout: Record<string, ProductPage['about']> = {
  lite: [
    {
      type: 'p',
      text: 'The Isle Lite is built for players who want map awareness first. In Evrima PvP, knowing enemy positions, drop locations and loot timings wins more fights than raw mechanics—Lite gives you that edge without skill automation.',
    },
    { type: 'h2', text: 'Evrima-safe by design' },
    {
      type: 'p',
      text: 'Lite skips Aimbot and bot modules entirely. Your gameplay looks natural while ESP, radar hack and loot timers keep you informed. Stream-proof mode hides overlays from OBS capture for content creators.',
    },
  ],
  pro: [
    {
      type: 'p',
      text: 'The Isle Pro is the sweet spot for Evrima grinders. Aimbot, Smooth Aim and Sticky Aim help you win group fights without obvious bot patterns—when you tune Smoothness sliders using our portal presets.',
    },
    { type: 'h2', text: 'Aimbot + awareness combined' },
    {
      type: 'p',
      text: 'Pro inherits every Lite module and adds Skill Assist, Target Priority, Hotkey macros and FOV and smoothness drawing. You see the fight before it starts and win it with skill assist that stays human at default settings.',
    },
  ],
  elite: [
    {
      type: 'p',
      text: 'The Isle Elite is the private build for players who want everything—Farm Assist, Auto Kill, Auto Interrupt, Skin preview, full ESP wallhack and direct developer support. Limited slots keep the build maintainable and patch cycles fast.',
    },
    { type: 'h2', text: 'Use Elite responsibly' },
    {
      type: 'p',
      text: 'Elite power demands disciplined profiles. Test in lobbies, start with portal conservative presets, and scale up over days—not minutes. Staff in Discord help Elite users tune before their first Evrima queue.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  lite: [
    { type: 'h2', text: 'Included modules' },
    {
      type: 'p',
      text: 'Player ESP with distance and name tags, drop and gather locator, loot spawn timers, radar hack, and stream-safe overlay hiding. Config presets for Evrima, Arena and instances ship in the portal—load before your first queue.',
    },
    { type: 'h2', text: 'Upgrade path' },
    {
      type: 'p',
      text: 'Lite license holders can upgrade to Pro or Elite through the portal without losing config backups. Compare tiers on the main product page before checkout via our secure checkout.',
    },
  ],
  pro: [
    { type: 'h2', text: 'Aimbot and automation' },
    {
      type: 'p',
      text: 'Skill Assist, Smooth Aim, Sticky Aim with Prediction, Target Priority and hotkey macros for heals and flight. Smoothness sliders tunes cast timing so skill assist stays natural in Evrima PvP. Start with portal presets, not max sliders.',
    },
    { type: 'h2', text: 'Recommended pairing' },
    {
      type: 'p',
      text: 'Pro is the most popular tier at theisle-cheats.net—enough firepower for high Evrima rank fights without Elite slot limits. Pair with our skill-assist guide in the blog before your first Evrima session.',
    },
  ],
  elite: [
    { type: 'h2', text: 'Full bot and finish suite' },
    {
      type: 'p',
      text: 'Farm Assist, Flight Assist AI, Auto Kill, Auto Interrupt, Skin preview and full ESP wallhack with stealth alerts. Use safe-zone testing before Evrima PvP—Elite power requires disciplined profiles, not rage settings.',
    },
    { type: 'h2', text: 'Availability' },
    {
      type: 'p',
      text: 'Elite shows as limited slots on the status banner. Open a Discord ticket if checkout is gated—staff confirm slot availability before purchase.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'When you need it' },
    {
      type: 'p',
      text: 'Use when fresh EAC accounts fail instantly on one PC but work elsewhere—classic HWID enforcement. Do not use for account-only anti-cheat cases; see [UGC](/products/the-isle-cheats/ugc/) instead.',
    },
    { type: 'h2', text: 'Full workflow' },
    {
      type: 'p',
      text: 'Restore point, driver cleanup, spoof application, cold reboot, identifier verification, then conservative cheat profile before Evrima PvP. Full checklist ships in the portal and in our HWID blog guide.',
    },
  ],
  'ugc': [
    { type: 'h2', text: 'What UGC covers' },
    {
      type: 'p',
      text: 'UGC (Unban & Governance Control) is an appeal workspace for EAC account restrictions, anti-cheat bans, trade holds and security flags. Build custom workflows, automate dispute steps and track case status from one dashboard—not a guaranteed unban service.',
    },
    { type: 'h2', text: 'Realistic expectations' },
    {
      type: 'p',
      text: 'Some anti-cheat bans cannot be reversed. UGC organizes evidence and follow-ups for EAC review. Pair with [HWID Spoofer](/products/the-isle-cheats/hwid-spoofer/) when hardware is flagged, or a new account when reputation is burned.',
    },
  ],
  'unlock-all': [
    { type: 'h2', text: 'Local preview only' },
    {
      type: 'p',
      text: 'Cosmetics display on your client for testing and content creation. Other players nearby see your actual inventory, not preview costumes.',
    },
    { type: 'h2', text: 'Included with Elite' },
    {
      type: 'p',
      text: 'Skin preview ships inside the Elite tier. Buy standalone here if you want cosmetic preview without full combat modules.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  lite: {
    images: slide('gpMapHack', 'gpLongRange', 'gpSpawn'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: isleSystemRequirements,
    fullFeatures: [
      'Player ESP & player boxes',
      'Drop & loot locator',
      'Zone awareness',
      'Health & shield tracking',
      'Mini-radar overlay',
      'Streamproof overlay mode',
      'Distance readouts',
      'Team color filter',
      'Loot spawn timers',
      'Radar hack',
      'instance preset config',
      'Evrima preset config',
      'Cloud config backup',
      'Patch auto-updater',
    ],
    overview: {
      title: 'The Isle Lite: ESP and radar',
      paragraphs: [
        'Lite is for player ESP, drop markers, loot timers and radar. No skill assist. Set distance, colors and stream-proof in the portal before you queue.',
        'Best if you want awareness in Evrima, arenas and instances without combat automation. Overlays are updated after The Isle patches.',
      ],
    },
  },
  pro: {
    images: slide('gpScripts', 'gpAimLock', 'gpHeroEsp'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: isleSystemRequirements,
    fullFeatures: [
      'All Lite ESP & ESP wallhack modules',
      'Aimbot',
      'Smooth Aim',
      'Sticky Aim & Prediction',
      'Target Priority',
      'Hotkey macros (heals/buffs)',
      'Auto Heal',
      'FOV & smoothness tuning',
      'Per-class skill-assist profiles',
      'Third-party alert integration',
      'Evrima-safe default presets',
      'Lobby test profile',
      'Cloud config backup',
      'Patch auto-updater',
      'Discord operator support',
    ],
    overview: {
      title: 'The Isle Pro: skill assist plus ESP',
      paragraphs: [
        'Pro includes everything in Lite, plus Aimbot, Smooth Aim, Sticky Aim and hotkey macros. Aim settings live in one tab. Start with a portal preset, not max sliders.',
        'Most people pick Pro for Evrima, arenas and instances. Target priority (torso/chest) and macros help in fights while defaults stay smooth.',
      ],
    },
  },
  elite: {
    images: slide('gpAutoKill', 'gpThermal', 'gpBuildFight'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: isleSystemRequirements,
    fullFeatures: [
      'All Lite + Pro modules',
      'Farm Assist',
      'Flight Assist AI',
      'Drop respawn timer',
      'Auto loadout manager',
      'Auto Kill',
      'Auto Interrupt',
      'Full ESP wallhack suite',
      'Third-party alert system',
      'Visibility detector',
      'Skin preview (Unlock All)',
      'Priority patch queue',
      'Direct dev Discord support',
      'Elite conservative presets',
      'Cloud config backup',
      'Patch auto-updater',
      'Private slot access',
    ],
    overview: {
      title: 'The Isle Elite: full cheat + extras',
      paragraphs: [
        'Elite includes Lite and Pro modules, plus farm assist, Auto Kill, Auto Interrupt, Skin preview, full ESP wallhack and faster patch priority.',
        'Slots are limited. Discord support helps you set safer profiles before Evrima PvP. Check the status banner on theisle-cheats.net before you buy.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('gpZoomHack', 'gpArena', 'gpSquad'),
    goodToKnow:
      'Run the compatibility scan in the portal before spoofing. Create a Windows restore point first. Verify identifiers changed after a cold reboot before launching The Isle.',
    limitations:
      'Spoofing does not help account-only anti-cheat cases. Never stack two spoof tools. Shared or work PCs may not be suitable. You accept all risk from driver-level changes.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit with administrator access.' },
      { icon: 'reqRestorePoint', text: 'Ability to create a system restore point before running.' },
      { icon: 'reqShieldGuide', text: 'Follow the portal setup guide before launching The Isle after spoofing.' },
      { icon: 'reqWifi', text: 'Stable connection for portal verification tools.' },
    ],
    fullFeatures: [
      'Disk serial profile tools',
      'MAC address rotation',
      'Restore point checklist',
      'Compatibility scan',
      'Driver conflict detection',
      'Post-spoof verification',
      'Identifier diff report',
      'Cold reboot guide',
      'Portal step-by-step workflow',
      'Discord recovery support',
    ],
    overview: {
      title: 'HWID Spoofer for The Isle PC bans',
      paragraphs: [
        'Use the HWID Spoofer when EAC anti-cheat flags your PC hardware but the EAC account is still fine. Includes disk and MAC tools, a restore-point checklist, a compatibility scan and post-spoof checks.',
        'Use it when new accounts die on one PC but work on another. It does not fix account-only anti-cheat bans. After spoofing, use a safer cheat profile before Evrima PvP.',
      ],
    },
  },
  ugc: {
    images: slide('gpZoomHack', 'gpFarmBot', 'gpLongRange'),
    goodToKnow:
      'Gather order email, platform account details and restriction screenshots before opening a ticket. UGC structures appeals—it does not bypass platform review.',
    limitations:
      'UGC does not guarantee account restoration. Results vary by case type. Permanent anti-cheat bans may require a new account path instead of appeal.',
    systemRequirements: [
      { icon: 'reqMailOrder', text: 'Order email used at checkout on theisle-cheats.net or at checkout on theisle-cheats.net.' },
      { icon: 'reqShieldAccount', text: 'Account details and ban or restriction notification if available.' },
      { icon: 'reqWifiPortal', text: 'Internet access for Discord support and case dashboard.' },
    ],
    fullFeatures: [
      'Custom appeal workflows',
      'Restriction dispute automation',
      'Case documentation templates',
      'Status tracking dashboard',
      'Identity verification guide',
      'Evidence upload structure',
      'Timeline tracker',
      'Follow-up response templates',
      'Multi-platform support',
    ],
    overview: {
      title: 'UGC account appeal tools',
      paragraphs: [
        'UGC (Unban & Governance Control) helps you organize appeals for EAC restrictions and anti-cheat bans. It does not guarantee an unban.',
        'Track cases, keep evidence in one place and follow up from the dashboard. Discord support can walk you through steps when needed.',
      ],
    },
  },
  'unlock-all': {
    images: slide('gpSkinChanger', 'gpChams', 'gpCombat'),
    goodToKnow:
      'Unlock All previews cosmetics locally on your client. Other players nearby see your real inventory—not preview costumes. Included with Elite tier.',
    limitations:
      'Local preview only—does not modify costume wardrobe or store state. Other players cannot see previewed skins or sets.',
    systemRequirements: isleSystemRequirements,
    fullFeatures: [
      'Outfit skin swap',
      'Costume & appearance preview',
      'Weapon & wing customizer',
      'Loading screen editor',
      'Cursor & HUD theme',
      'Drop & loot replacer',
      'Favorites list',
      'Loadout export',
    ],
    overview: {
      title: 'Skin preview / Unlock All',
      paragraphs: [
        'Unlock All lets you preview outfits, appearances and wings on your The Isle client. It does not change your costume wardrobe or store purchases.',
        'Only you see the preview costumes. Other players see your real inventory. Included with Elite, or buy it alone without combat modules.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    const displayName = cheat.name === 'Lite' ? 'The Isle Lite' : cheat.name === 'Pro' ? 'The Isle Pro' : 'The Isle Elite';
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(displayName),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      return {
        slug,
        kind: 'utility',
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export { heroSlides } from './isleMedia';

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'The Isle Elite cheats with ESP, combat assist and nest tools, plus HWID spoofer and UGC appeals for Evrima on PC.',
  buyUrl: checkoutPath('theIsle'),
};
