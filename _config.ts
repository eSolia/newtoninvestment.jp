import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  src: "src",
});

site.use(multilanguage({
  languages: ["en", "ja"],
  defaultLanguage: "ja",
}));

site.use(favicon({
  input: "assets/img/favicon.png",
}));

site.use(metas());
site.use(sitemap({
  priority: "priority",
}));

site.copy("assets");
site.copy("humans.txt");

export default site;
