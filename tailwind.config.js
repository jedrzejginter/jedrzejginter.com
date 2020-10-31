const theme = require("tailwindcss/defaultTheme");

function createIncrement(initialValue = 1) {
  let value = initialValue;

  return function increment() {
    value += 1;
    return value;
  };
}

const zIndex = createIncrement();

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: ["**/*.jsx", "**/*.mdx"],
  theme: {
    colors: {
      black: "#000",
      brand: "#261EAC",
      transparent: "transparent",
      white: "#fff",
    },
    boxShadow: {
      "green-light-backdrop": "0 18px 26px #12cad63b",
      "gray-backdrop": "0 12px 28px #413d4f26",
      "box-highlight": "inset 2px 2px 0 #fff, 6px 10px 10px rgba(0,0,0,.1)",
    },
    fontFamily: {
      sans: ["Inter", ...theme.fontFamily.sans],
    },
    zIndex: {
      base: zIndex(),
    },
    extend: {
      border: {
        px: '1px'
      }
    },
  },
  variants: {},
  plugins: [],
};
