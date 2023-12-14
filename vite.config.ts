import checker from "vite-plugin-checker";
export default {
  base: "/portfolio-example/",
  plugins: [
    checker({
      // e.g. use TypeScript check
      typescript: true,
    }),
  ],
};
