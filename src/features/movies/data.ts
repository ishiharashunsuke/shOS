import type { Collection, Movie, Viewing } from "./types";

/**
 * Placeholder data — swap these for your own favorite movies.
 * Every text field is meant to be personal (why it matters to you),
 * not a synopsis or a review copied from elsewhere.
 *
 * This backs `movies.service.ts` for now. When Supabase is wired up,
 * only the service's internals change — callers are unaffected.
 */
export const movies: Movie[] = [
  {
    slug: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: 2017,
    director: "Denis Villeneuve",
    genres: ["Sci-Fi", "Drama"],
    rating: 4.5,
    oneLiner: "光と沈黙だけで語る、完璧すぎる続編。",
    thoughts:
      "ここに感想を書いてください。画面の間の取り方、音の使い方、色の設計——なぜこの映画が自分にとって特別なのかを自由に。",
    favoriteScene: "ここに好きなシーンを書いてください。",
    analysis: "ここに考察を書いてください。テーマ、モチーフ、監督の意図など。",
    lingeringNote: "ここに余韻メモを書いてください。観終えたあと、しばらく何をしていたか。",
    relatedSlugs: ["her", "interstellar"],
  },
  {
    slug: "whiplash",
    title: "Whiplash",
    year: 2014,
    director: "Damien Chazelle",
    genres: ["Drama", "Music"],
    rating: 5,
    oneLiner: "才能とは、追い詰められた先にしかないのかもしれない。",
    thoughts:
      "ここに感想を書いてください。編集のテンポ、ドラムの音、あの最後のセッションについて。",
    favoriteScene: "ここに好きなシーンを書いてください。",
    analysis: "ここに考察を書いてください。師弟関係の是非、努力と才能の境界線など。",
    lingeringNote: "ここに余韻メモを書いてください。",
    relatedSlugs: ["rush"],
  },
  {
    slug: "drive",
    title: "Drive",
    year: 2011,
    director: "Nicolas Winding Refn",
    genres: ["Crime", "Thriller"],
    rating: 4,
    oneLiner: "寡黙さがそのまま美学になっている一本。",
    thoughts: "ここに感想を書いてください。ネオンの色彩、シンセの音、沈黙の使い方。",
    favoriteScene: "ここに好きなシーンを書いてください。",
    analysis: "ここに考察を書いてください。主人公の匿名性が持つ意味など。",
    lingeringNote: "ここに余韻メモを書いてください。",
    relatedSlugs: ["rush", "blade-runner-2049"],
  },
  {
    slug: "rush",
    title: "Rush",
    year: 2013,
    director: "Ron Howard",
    genres: ["Sport", "Drama", "Biography"],
    rating: 4.5,
    oneLiner: "ライバルがいたから、それぞれが最速になれた。",
    thoughts:
      "ここに感想を書いてください。ラウダとハントの対比、70年代F1の空気感について。",
    favoriteScene: "ここに好きなシーンを書いてください。",
    analysis: "ここに考察を書いてください。競争が人を作るという構図など。",
    lingeringNote: "ここに余韻メモを書いてください。",
    relatedSlugs: ["drive", "whiplash"],
  },
  {
    slug: "her",
    title: "Her",
    year: 2013,
    director: "Spike Jonze",
    genres: ["Sci-Fi", "Romance", "Drama"],
    rating: 4,
    oneLiner: "テクノロジーが一番近くにあった時代の、静かなラブストーリー。",
    thoughts: "ここに感想を書いてください。色彩設計、声だけの存在感について。",
    favoriteScene: "ここに好きなシーンを書いてください。",
    analysis: "ここに考察を書いてください。人とAIの関係性の描き方など。",
    lingeringNote: "ここに余韻メモを書いてください。",
    relatedSlugs: ["blade-runner-2049", "interstellar"],
  },
  {
    slug: "interstellar",
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    rating: 4.5,
    oneLiner: "科学と親子愛が、同じ重力方程式の中にある。",
    thoughts: "ここに感想を書いてください。スケール感、音楽、時間の描き方について。",
    favoriteScene: "ここに好きなシーンを書いてください。",
    analysis: "ここに考察を書いてください。相対性理論の使い方、テーマの構造など。",
    lingeringNote: "ここに余韻メモを書いてください。",
    relatedSlugs: ["her", "blade-runner-2049"],
  },
];

/** Placeholder watch log — Journal and Timeline both read from this. */
export const viewings: Viewing[] = [
  { id: "v1", movieSlug: "blade-runner-2049", watchedDate: "2024-11-02" },
  { id: "v2", movieSlug: "whiplash", watchedDate: "2025-01-18" },
  { id: "v3", movieSlug: "her", watchedDate: "2025-04-05" },
  { id: "v4", movieSlug: "drive", watchedDate: "2025-08-22" },
  { id: "v5", movieSlug: "interstellar", watchedDate: "2025-12-09" },
  { id: "v6", movieSlug: "rush", watchedDate: "2026-03-14" },
  { id: "v7", movieSlug: "blade-runner-2049", watchedDate: "2026-06-01", note: "二度目、字幕なしで。" },
];

/** Placeholder curated sets. */
export const collections: Collection[] = [
  {
    slug: "quiet-machines",
    title: "静かな機械たち",
    curatorNote: "人ではないものが、人よりも人らしく見える瞬間を集めた部屋。",
    movieSlugs: ["blade-runner-2049", "her", "interstellar"],
  },
  {
    slug: "speed-and-solitude",
    title: "速度と孤独",
    curatorNote: "何かに取り憑かれたように前へ進む人たちの記録。",
    movieSlugs: ["drive", "rush", "whiplash"],
  },
];
