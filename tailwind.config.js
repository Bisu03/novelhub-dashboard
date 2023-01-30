module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      textColor: {
        skin: {
          base: "var(--color-secondary)",
          muted: "var(--color5)",
          red: "var(--color6)",
          grey: "var(--color7)",
          yello: "var(--color8)",
          inverted: "var(--color-primary)",
        },
      },
      backgroundColor: {
        skin: {
          greadient: "var(--color-greadient)",
          backgroud: "var(--color-backgroud)",
          backgroud2: "var(--color-backgroud2)",
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          color4: "var(--color4)",
          color5: "var(--color5)",
          color6: "var(--color6)",
          color7: "var(--color7)",
          color8: "var(--color8)",
          color9: "var(--color9)",
        },
      },
      borderColor: {
        skin: {
          primary: "var(--color-primary)",
          color7: "var(--color7)",
        },
      },
    },
  },
  plugins: [],
};
