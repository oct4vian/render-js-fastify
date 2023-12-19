const fastify = require("fastify");
const app = fastify();

const port = process.env.PORT || 3000;

app.get("/", async (req, reply) => {
  return "Hello World!";
});

app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.log(`Example app listening on port ${port}`);
});
