export type Movie = {
  slug: string;
  title: string;
  year: number;
  director: string;
  genres: string[];
  /** 0-5, supports .5 increments. */
  rating: number;
  /** Path under /public, e.g. "/movies/poster.jpg". Omit to use the generated placeholder. */
  poster?: string;
  oneLiner: string;
  thoughts: string;
  favoriteScene: string;
  analysis: string;
  relatedSlugs: string[];
};

/**
 * Placeholder data — swap these for your own favorite movies.
 * Every text field is meant to be personal (why it matters to you),
 * not a synopsis or a review copied from elsewhere.
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
    relatedSlugs: ["her", "blade-runner-2049"],
  },
];
