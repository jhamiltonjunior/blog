module.exports = ({ env }) => ({
  host: env('HOST', '18.231.73.136'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
