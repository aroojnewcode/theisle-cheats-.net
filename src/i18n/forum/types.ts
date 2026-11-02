import type { ForumComment, ForumPost } from '../../data/forum';

export type ForumPostOverlay = Partial<
  Pick<ForumPost, 'title' | 'excerpt' | 'body' | 'flair'>
> & {
  comments?: Partial<Pick<ForumComment, 'body'>>[];
};

export type ForumLocalePack = Record<string, ForumPostOverlay>;

import type { Locale } from '../locales';
import { koForum } from './locales/ko';
import { zhTwForum } from './locales/zh-tw';
import { deForum } from './locales/de';
import { ptBrForum } from './locales/pt-br';
import { thForum } from './locales/th';

const PACKS: Partial<Record<Locale, ForumLocalePack>> = {
  ko: koForum,
  'zh-tw': zhTwForum,
  de: deForum,
  'pt-br': ptBrForum,
  th: thForum,
};

export function localizeForumPost(post: ForumPost, locale: Locale): ForumPost {
  if (locale === 'en') return post;
  const overlay = PACKS[locale]?.[post.slug];
  if (!overlay) return post;
  return {
    ...post,
    title: overlay.title ?? post.title,
    excerpt: overlay.excerpt ?? post.excerpt,
    sourceTitle: overlay.sourceTitle ?? post.sourceTitle,
    flair: overlay.flair ?? post.flair,
    body: overlay.body ?? post.body,
    comments: post.comments.map((c, i) => {
      const o = overlay.comments?.[i];
      return o?.body ? { ...c, body: o.body } : c;
    }),
  };
}

export function localizeForumPosts(posts: ForumPost[], locale: Locale): ForumPost[] {
  return posts.map((p) => localizeForumPost(p, locale));
}
