import fastify from './index.js';

(async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    console.log(err);
  }
})();
