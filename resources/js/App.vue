<template>
  <!DOCTYPE html>
  <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Laravel Fortify + Sanctum</title>
      @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>

    <body>
      <div id="app">
        <router-view />
      </div>
    </body>
  </html>
</template>
