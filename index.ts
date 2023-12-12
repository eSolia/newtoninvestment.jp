import Server from "lume/core/server.ts";

const server = new Server();

server.use(async (request, next) => {
  const start = Date.now();
  const response = await next(request);
  const ms = Date.now() - start;

  response.headers.set("X-Response-Time", `${ms}ms`);
  response.headers.set("X-Custom-Header", "Newton");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload",
  );
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("Referrer-Policy", "strict-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Powered-By", "Blood Sweat Tears");
  response.headers.set(
    "Permissions-Policy",
    "accelerometer=(), ambient-light-sensor=*, autoplay=(self), battery=(self), camera=(), cross-origin-isolated=*, fullscreen=*, geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), midi=(), payment=(), picture-in-picture=(), usb=()",
  );

  return response;
});

server.start();

console.log("Listening on http://localhost:8000");
