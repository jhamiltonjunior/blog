module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
<<<<<<< HEAD
// url: 'https://hamiltonjr.dev'
=======
  // url: 'hamiltonjr.dev'
>>>>>>> 87dfbf37b4bbd60780a6a89665ab52b29c7d0def
});
