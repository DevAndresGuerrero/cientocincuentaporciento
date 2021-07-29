const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .vue({ version: 2 })
    .setPublicPath('public');

    if (mix.inProduction()) {
        mix.version();
    }


mix.webpackConfig({
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.js'
    }
  }
});

mix.disableNotifications();
