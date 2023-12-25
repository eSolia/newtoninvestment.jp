// ./list.tmpl.js

export default function * ({ site }) {
  yield {
    url: "/en/list.html",
    data: {
      title: "List of all pages",
      lang: "en",
      id: "pagelister",
      layout: "layouts/index.vto",
    },
    content: `
      <ul>
        ${site.pages.map(page => `<li><a href="${page.url}">${page.url}</a></li>`).join("")}
      </ul>
    `,
  };
}