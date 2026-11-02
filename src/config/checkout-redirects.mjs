/** Checkout destinations — all products route to NovaXware on Zadeyo. */
export const NOVAXWARE_CHECKOUT = 'https://zadeyo.com/go/8b9cad82?to=%2Fproducts%2Fthe-isle-novaxware';

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
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }
  return null;
}
