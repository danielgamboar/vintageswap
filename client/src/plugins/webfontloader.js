/**
 * plugins/webfontloader.js
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

export async function loadFonts() {
  const webFontLoader = await import(
    /* webpackChunkName: "webfontloader" */ 'webfontloader'
  );

  webFontLoader.load({
    google: {
      families: ['Andada+Pro:400,600,700,800&display=swap'],
    },
  });
}
