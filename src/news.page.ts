export const layout = "layouts/news_list.vto";

export const ja = {
  title: "ニュース",
};

export const en = {
  title: "News",
};

export default function* ({ search, paginate }: Lume.Data) {
  for (const lang of ["ja", "en"]) {
    const news = search.pages(`type=news lang=${lang}`);
    const result = paginate(news, {
      url(n: number) {
        if (n === 1) {
          return lang === "ja" ? "/news/" : `/${lang}/news/`;
        }
        return lang === "ja" ? `/news/${n}/` : `/${lang}/news/${n}/`;
      },
      each(data, n: number) {
        data.id = `news_list_${n}`;
        data.lang = lang;
      },
    });

    for (const page of result) {
      yield page;
    }
  }
}
