module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  eleventyConfig.addPassthroughCopy("images");
  return {
    pathPrefix: "/wishlist-collection-eleventy/",
    dir: {
      input: ".",     // your source files
      output: "docs"  // GitHub Pages will serve from this
    }
  };
};