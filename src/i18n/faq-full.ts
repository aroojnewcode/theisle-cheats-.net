import type { SiteFaqItem } from '../data/faq';
import type { Locale } from './locales';
import { FAQ_DE } from './faq/locales/de';
import { FAQ_KO } from './faq/locales/ko';
import { FAQ_PT_BR } from './faq/locales/pt-br';
import { FAQ_TH } from './faq/locales/th';
import { FAQ_ZH_TW } from './faq/locales/zh-tw';
import type { FaqCopy } from './faq/types';

const PRIORITY_FAQ: Partial<Record<Locale, Record<string, FaqCopy>>> = {
  ko: FAQ_KO,
  'zh-tw': FAQ_ZH_TW,
  de: FAQ_DE,
  'pt-br': FAQ_PT_BR,
  th: FAQ_TH,
};

export function localizeFaqItems(locale: Locale, items: SiteFaqItem[]): SiteFaqItem[] {
  const pack = PRIORITY_FAQ[locale];
  if (!pack) return items;
  return items.map((item) => {
    const copy = pack[item.id];
    if (!copy) return item;
    return { ...item, q: copy.q, a: copy.a };
  });
}
