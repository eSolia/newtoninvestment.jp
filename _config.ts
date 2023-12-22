import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import decapCMS from "lume/plugins/decap_cms.ts";
import date from "lume/plugins/date.ts";
import filterPages from "lume/plugins/filter_pages.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import transformImages from "lume/plugins/transform_images.ts";
import picture from "lume/plugins/picture.ts";
import pagefind from "lume/plugins/pagefind.ts";

import en from "npm:date-fns@2.30.0/locale/en-US/index.js";
import ja from "npm:date-fns@2.30.0/locale/ja/index.js";

// Change markdown-it configuration
// const markdown = {
//   options: {
//     breaks: false,
//     xhtmlOut: true,
//   },
// };

const site = lume(
  {
    src: "src",
    location: new URL("https://newtoninvestment.jp"),
  },
);

site.use(date({
  locales: { en, ja },
}));

site.use(multilanguage({
  languages: ["en", "ja"],
  defaultLanguage: "ja",
}));

site.use(picture());
site.use(transformImages());
site.use(pagefind());

site.use(favicon({
  input: "assets/img/favicon.png",
}));

site.use(lightningcss());
site.use(metas());
site.use(filterPages({
  fn: (page) => !page.data.external_link,
}));

site.use(sitemap({
  priority: "priority",
}));

site.use(decapCMS({
  identity: "netlify",
  path: "/6E77746E/",
}));

site.copy("assets");
site.copy("humans.txt");
site.copy("robots.txt");

export default site;
