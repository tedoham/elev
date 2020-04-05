module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/img");
    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "dist",
            data: "_data"
        }
    };
};
