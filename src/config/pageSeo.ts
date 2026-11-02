/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'The Isle Cheats | Player ESP, Radar & Evrima Tools',
    description:
      'The Isle cheats and hacks for Evrima on PC—player and dino ESP, nest radar, combat assist, stream proof and EAC-aware updates via NovaXware loader.',
  },
  '/products/the-isle-cheats/': {
    title: 'The Isle Cheats Products | Lite, Pro, Elite',
    description:
      'Compare The Isle cheat tiers and private hacks with player ESP, combat assist and nest tools, plus HWID spoofer and UGC appeal utilities for EAC on Windows PC.',
  },
  '/products/the-isle-cheats/elite/': {
    title: 'The Isle Elite Cheats | Nest ESP, Combat Suite & Priority EAC',
    description:
      'The Isle Elite with full ESP, growth assist, combat finish tools, nest ESP and priority loader updates after EAC patches.',
  },
  '/products/the-isle-cheats/utilities/': {
    title: 'The Isle Cheats Utilities | HWID & UGC',
    description:
      'HWID spoofer after hardware bans and UGC workspace for EAC and Steam appeal workflows—The Isle hacks utilities before relaunching The Isle Evrima.',
  },
  '/blog/': {
    title: 'The Isle Cheats Guides | ESP & EAC Setup',
    description:
      'Guides on The Isle ESP, radar presets, Lite vs Pro hacks, combat assist tuning and EAC patch-day checks for Evrima.',
  },
  '/forum/': {
    title: 'The Isle Cheats Forum | Setup & Evrima Discussions',
    description:
      'Community Q&A on The Isle hack setup, ESP configs, EAC status and NovaXware loader questions after patches.',
  },
  '/faq/': {
    title: 'FAQ | The Isle Cheats, ESP & NovaXware Loader',
    description:
      'Answers on The Isle cheat tiers, player and dino ESP, combat assist, EAC updates, HWID spoofer and loader setup for Evrima.',
  },
  '/terms/': {
    title: 'Terms & Conditions | The Isle Cheats',
    description:
      'Purchase terms, license use and refund policy for The Isle cheat products on theisle-cheats.net.',
  },
  '/privacy/': {
    title: 'Privacy Policy | The Isle Cheats',
    description:
      'How theisle-cheats.net uses analytics, cookies and contact data.',
  },
  '/about/': {
    title: 'About The Isle Cheats',
    description:
      'The Isle Cheats sells PC Evrima cheat tiers, private hacks, utilities and guides at theisle-cheats.net.',
  },
  '/support/': {
    title: 'The Isle Cheats Support',
    description:
      'Help with NovaXware loader setup, configs, HWID spoofing and checkout for The Isle hacks.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
