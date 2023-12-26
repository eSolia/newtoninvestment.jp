export const url = "/list.html";
export const title = "全ファイル一覧";
export const lang = "ja";
export const id = "pagelister";
export const layout = "layouts/terms.vto";

export default function ({ search }: Lume.Data) {
  const files = search.files();
  
  return `
    <ul>
      ${files.map(path => `<li><a href="${path}">${path}</a></li>`).join("")}
    </ul>
  `;
}
