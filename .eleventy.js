module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/js/");
  eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
