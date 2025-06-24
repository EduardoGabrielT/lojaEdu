/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./paginas/**/*.html",     // Se tiver HTMLs dentro de /paginas
    "./**/*.html",             // Escaneia qualquer HTML em qualquer pasta
    "./**/*.js",               // Opcional: caso queira detectar classes em scripts
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
};
