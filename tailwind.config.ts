const daisyui = require("daisyui"); 
module.exports = {
  plugins: [daisyui],
  daisyui: {
    themes: [], // Defina os temas ou use o padrão
    logs: false,
  },
  content: ["./*/.tsx"],
  theme: {
    container: {
      center: true,
    },
    screens: {
    }
  },
};
