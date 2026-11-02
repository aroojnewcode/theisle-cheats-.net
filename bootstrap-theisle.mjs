/**
 * D:-only setup: mirror buyaion2cheats-net, overlay C rebrand, patch media/checkout, npm dev.
 * Run: set TEMP=D:\temp&& set TMP=D:\temp&& node D:\theisle-cheats-net\bootstrap-theisle.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const ROOT = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1'));
const SRC = 'D:\\buyaion2cheats-net';
const OVERLAY = 'C:\\Users\\DELL 7280\\Documents\\the isle cheats';
const NPM_CACHE = 'D:\\npm-cache';
const TEMP = 'D:\\temp';

const NOVAX =
  'https://zadeyo.com/go/8b9cad82?to=%2Fproducts%2Fthe-isle-novaxware';

const ISLE_CDN = [
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793458663436-u7jj0r-isle3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/ad4c79ec-795c-4c4f-b7f2-4126c15eb0d4/1793458600681-movakg-isle2.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/1242b160-0414-44df-95cc-e45319c48f50/1793307520290-zkpozf-screenshot-4.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/1242b160-0414-44df-95cc-e45319c48f50/1793306996991-hmhqkp-the-isle-screenshot-3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/1242b160-0414-44df-95cc-e45319c48f50/1793306976922-9sc5wv-the-isle-screenshot-1-320.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793197906700-a4j9p0-images-3.webp',
  'https://ooszazcwzmwhitdxwtom.supabase.co/storage/v1/object/public/seo-media-library/the-isle/c7f7b806-cb3e-4eea-8fa1-eca85c479073/1793193999064-29d39t-pussycat-isle-s1.webp',
];

const SKIP = new Set(['node_modules', '.git', 'dist', '.astro']);

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyTree(from, to, skip = SKIP) {
  ensureDir(to);
  for (const name of fs.readdirSync(from)) {
    if (skip.has(name)) continue;
    const s = path.join(from, name);
    const d = path.join(to, name);
    const st = fs.statSync(s);
    if (st.isDirectory()) copyTree(s, d, skip);
    else fs.copyFileSync(s, d);
  }
}

function overlayNonEmpty(fromRoot, toRoot) {
  if (!fs.existsSync(fromRoot)) return;
  for (const rel of walk(fromRoot)) {
    const src = path.join(fromRoot, rel);
    if (!fs.statSync(src).isFile()) continue;
    if (fs.statSync(src).size < 8) continue;
    const dest = path.join(toRoot, rel);
    ensureDir(path.dirname(dest));
    fs.copyFileSync(src, dest);
  }
}

function* walk(dir, base = '') {
  for (const name of fs.readdirSync(dir)) {
    const rel = base ? `${base}/${name}` : name;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) yield* walk(full, rel);
    else yield rel.replace(/\\/g, '/');
  }
}

function writeIsleMedia() {
  const body = `/** The Isle gameplay screenshots (Supabase CDN). */
export const ISLE_CDN_IMAGES = ${JSON.stringify(ISLE_CDN, null, 2)} as const;

export const heroSlides = ISLE_CDN_IMAGES.map((src, i) => ({
  src,
  alt: \`The Isle cheat gameplay screenshot \${i + 1}\`,
  caption: 'The Isle gameplay',
  captionDesc: 'ESP, radar and combat overlay in live sessions.',
}));

export function isleBlogImage(index: number): string {
  return ISLE_CDN_IMAGES[index % ISLE_CDN_IMAGES.length]!;
}

export const BLOG_GAMEPLAY_HERO_IMAGES = {
  espBoss: ISLE_CDN_IMAGES[0]!,
  espCemetery: ISLE_CDN_IMAGES[1]!,
  combatPurple: ISLE_CDN_IMAGES[2]!,
  combatPlateau: ISLE_CDN_IMAGES[3]!,
} as const;
`;
  fs.writeFileSync(path.join(ROOT, 'src/data/isleMedia.ts'), body);
}

function patchProductsTs() {
  const file = path.join(ROOT, 'src/data/products.ts');
  let text = fs.readFileSync(file, 'utf8');
  if (text.includes("export { heroSlides } from './isleMedia'") && text.length < 200) {
    text = fs.readFileSync(path.join(SRC, 'src/data/products.ts'), 'utf8');
  }
  text = text
    .replace("const productBase = '/products/aion-2-cheats/';", "const productBase = '/products/the-isle-cheats/';")
    .replace(/buyaion2cheats\.net/g, 'theisle-cheats.net')
    .replace(/checkoutPath\('aion2'\)/g, "checkoutPath('theIsle')")
    .replace(/\n\/\*\* Homepage hero[\s\S]*?export const heroSlides = slide\('gpHeroHome'\);\n/, '\nexport { heroSlides } from \'./isleMedia\';\n');
  fs.writeFileSync(file, text);
}

function patchBlogPosts() {
  const file = path.join(ROOT, 'src/data/blog/posts.ts');
  let text = fs.readFileSync(file, 'utf8');
  text = text.replace(
    /export const BLOG_GAMEPLAY_HERO_IMAGES = \{[\s\S]*?\} as const;/,
    "export { BLOG_GAMEPLAY_HERO_IMAGES, isleBlogImage } from '../isleMedia';",
  );
  let i = 0;
  text = text.replace(/image:\s*"\/images\/blog\/[^"]+"/g, () => {
    const url = ISLE_CDN[i % ISLE_CDN.length];
    i += 1;
    return `image: "${url}"`;
  });
  fs.writeFileSync(file, text);
}

function patchCheckoutRedirects() {
  const file = path.join(ROOT, 'src/config/checkout-redirects.mjs');
  fs.writeFileSync(
    file,
    `/** Checkout destinations — all products route to NovaXware on Zadeyo. */
export const NOVAXWARE_CHECKOUT = '${NOVAX}';

export const CHECKOUT_URLS = {
  theIsle: NOVAXWARE_CHECKOUT,
  skinChanger: NOVAXWARE_CHECKOUT,
  hwidSpoofer: NOVAXWARE_CHECKOUT,
  ugc: NOVAXWARE_CHECKOUT,
};

export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/the-isle', NOVAXWARE_CHECKOUT],
  ['/go/the-isle/', NOVAXWARE_CHECKOUT],
  ['/go/skin-changer', NOVAXWARE_CHECKOUT],
  ['/go/skin-changer/', NOVAXWARE_CHECKOUT],
  ['/go/hwid-spoofer', NOVAXWARE_CHECKOUT],
  ['/go/hwid-spoofer/', NOVAXWARE_CHECKOUT],
  ['/go/ugc', NOVAXWARE_CHECKOUT],
  ['/go/ugc/', NOVAXWARE_CHECKOUT],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;
  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(\`\${pathname}/\`) ?? null;
  }
  return null;
}
`,
  );
}

function patchCheckoutTs() {
  const file = path.join(ROOT, 'src/config/checkout.ts');
  let text = fs.readFileSync(file, 'utf8');
  text = text
    .replace(/\baion2\b/g, 'theIsle')
    .replace(/'aion-2'/g, "'the-isle'")
    .replace(/\/products\/aion-2/g, '/products/the-isle')
    .replace(/levocheats\.com/g, 'zadeyo.com');
  fs.writeFileSync(file, text);
}

function patchSiteConfig() {
  fs.writeFileSync(
    path.join(ROOT, 'src/config/site.ts'),
    `export const SITE_DOMAIN = 'theisle-cheats.net';
export const SITE_URL = \`https://\${SITE_DOMAIN}\`;
export const PRODUCT_BASE = '/products/the-isle-cheats/';
export const TITLE_PREFIX = 'The Isle Cheats';
export const SUPPORT_EMAIL = \`support@\${SITE_DOMAIN}\`;
export const DISCORD_URL = 'https://discord.com/invite/Vu85F8auQS';
`,
  );
}

function patchResponsiveImage() {
  const file = path.join(ROOT, 'src/components/ResponsiveImage.astro');
  if (!fs.existsSync(file)) {
    fs.copyFileSync(path.join(SRC, 'src/components/ResponsiveImage.astro'), file);
    return;
  }
  let text = fs.readFileSync(file, 'utf8');
  if (text.includes('isExternal')) return;
  text = text.replace(
    'const isRaster = /\\.(png|jpe?g|webp)$/i.test(src);',
    'const isExternal = /^https?:\\/\\//i.test(src);\nconst isRaster = !isExternal && /\\.(png|jpe?g|webp)$/i.test(src);',
  );
  text = text.replace(
    'const srcSet = responsiveSrcSet(src, widths);',
    'const srcSet = isRaster ? responsiveSrcSet(src, widths) : undefined;',
  );
  text = text.replace(
    'const imgSrc = desktopOnly',
    'const imgSrc = isExternal\n  ? src\n  : desktopOnly',
  );
  text = text.replace(
    '{\n  isRaster ? (',
    '{\n  isExternal ? (\n    <img\n      src={src}\n      alt={alt}\n      width={width}\n      height={height}\n      loading={loading}\n      fetchpriority={fetchPriority}\n      class={className}\n      decoding="async"\n    />\n  ) : isRaster ? (',
  );
  fs.writeFileSync(file, text);
}

function linkNodeModules() {
  const target = path.join(ROOT, 'node_modules');
  const source = path.join(SRC, 'node_modules');
  if (fs.existsSync(target)) return;
  try {
    fs.symlinkSync(source, target, 'junction');
  } catch {
    copyTree(source, target, new Set());
  }
}

function rmAionProductRoutes() {
  for (const rel of [
    'src/pages/products/aion-2-cheats',
    'src/pages/[locale]/products/aion-2-cheats',
  ]) {
    fs.rmSync(path.join(ROOT, rel), { recursive: true, force: true });
  }
}

function run(cmd, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      env: {
        ...process.env,
        TEMP,
        TMP: TEMP,
        npm_config_cache: NPM_CACHE,
      },
      shell: true,
    });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exit ${code}`))));
  });
}

async function main() {
  ensureDir(TEMP);
  ensureDir(NPM_CACHE);
  console.log('Copying base from', SRC, '→', ROOT);
  copyTree(SRC, ROOT);
  console.log('Overlay partial rebrand from', OVERLAY);
  overlayNonEmpty(path.join(OVERLAY, 'src'), path.join(ROOT, 'src'));
  rmAionProductRoutes();
  writeIsleMedia();
  patchProductsTs();
  patchBlogPosts();
  patchCheckoutRedirects();
  patchCheckoutTs();
  patchSiteConfig();
  patchResponsiveImage();
  if (!fs.existsSync(path.join(ROOT, 'src/components/ImageSlider.astro'))) {
    fs.copyFileSync(path.join(SRC, 'src/components/ImageSlider.astro'), path.join(ROOT, 'src/components/ImageSlider.astro'));
  }
  const heroEmbla = path.join(ROOT, 'src/scripts/hero-embla.ts');
  const overlayHero = path.join(OVERLAY, 'src/scripts/hero-embla.ts');
  if (fs.existsSync(overlayHero) && fs.statSync(overlayHero).size > 100) {
    fs.copyFileSync(overlayHero, heroEmbla);
  }
  linkNodeModules();
  if (!fs.existsSync(path.join(ROOT, 'node_modules/astro'))) {
    console.log('npm install…');
    await run('npm', ['install'], ROOT);
  }
  if (process.env.SETUP_ONLY === '1') {
    console.log('Setup complete (SETUP_ONLY).');
    return;
  }
  console.log('Starting dev server on http://127.0.0.1:4321 …');
  await run('npm', ['run', 'dev', '--', '--host', '127.0.0.1', '--port', '4321'], ROOT);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
