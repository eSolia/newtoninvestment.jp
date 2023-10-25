Newton Investments site, in static HTML, css, js.

This site is built by hand, and published via «[Deno Deploy](https://deno.com/deploy)». 

### Notes: 

* generated site files go into `html`, Japanese language in root, English in `html/en`.
* `index.ts` is entry point for Deno Deploy; _do not delete_
* for test, push to "dev" branch, which will deploy to a "branch" url [https://newtoninvestment-jp--dev.deno.dev](https://newtoninvestment-jp--dev.deno.dev/)
* for production, merge to "main" branch to view on the production url 
* generally, members can push directly, but guest devs should fork and PR, and from there, merge to dev and/or main to either test or move to production