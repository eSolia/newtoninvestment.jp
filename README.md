[![Netlify Status](https://api.netlify.com/api/v1/badges/cb2a3ab1-0e71-41d5-b374-c45b6a379f48/deploy-status)](https://app.netlify.com/sites/newtoninvestment-jp/deploys)

Newton Investments site, generated by «[Lume](https://lume.land/)» and hosted on [Netlify](https://netlify.com). Many thanks to [Óscar Otero](https://oscarotero.com/), creator of Lume, for his great work coding and help with migrating this site from static HTML to Lume.
 

### Notes (to be updated...):

- generated site files to publish should be saved under the `html` folder, with
  the Japanese language files in the root, and the English language equivalent
  files in `html/en`. For example:
  - Main Japanese site index: `html/index.html`
  - Main English site index: `html/en/index.html`
- The site is served via Deno Deploy, and some points about that:
  - Deploys to a global CDN for good performance in every major region
  - `index.ts` is entry point for Deno Deploy; _do not delete_
  - `index.ts` uses the Oak web framework to serve `html/index.html`
  - `index.ts` sets basic security headers
- to test, push to "dev" branch, which will deploy to a so-called "branch" url
  [https://newtoninvestment-jp--dev.deno.dev](https://newtoninvestment-jp--dev.deno.dev/)
  - in turn, if you pushed to "hoge", it would deploy on
    [https://newtoninvestment-jp--hoge.deno.dev](https://newtoninvestment-jp--hoge.deno.dev/)
- for production, merge dev (or some feature branch) to "main" branch to view on
  the production url
- after creating the GH Pull Request for merging to main, delete dev and
  recreate it from the latest main
- generally, repo members (maintainers) can push directly, but, any other needed
  guest devs (not maintainers) should fork and PR, and from there, maintainers
  can merge to `dev` and/or `main` to either test or move to production
