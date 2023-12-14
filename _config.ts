import lume from "lume/mod.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import sitemap from "lume/plugins/sitemap.ts";
import decapCMS from "lume/plugins/decap_cms.ts";

// Change markdown-it configuration
const markdown = {
  options: {
    breaks: false,
    xhtmlOut: true,
  },
};

const site = lume(
  { src: "src" },
  { markdown }
);

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

site.use(decapCMS({
  identity: "github",
}));

site.copy("assets");
site.copy("humans.txt");

export default site;
