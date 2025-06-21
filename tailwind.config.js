/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Vai escanear todos os HTML na raiz
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // plugin para estilos DaisyUI
  ],
};
