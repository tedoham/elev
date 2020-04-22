module.exports = function (eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
  });
  //   eleventyConfig.setBrowserSyncConfig({
  //     https: {
  //       key: '/etc/localhost.key',
  //       cert: '/etc/localhost.cert',
  //     },
  //   });

  eleventyConfig.addPassthroughCopy('./src/css');
  eleventyConfig.addPassthroughCopy('./src/js');
  eleventyConfig.addPassthroughCopy('./src/img');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
      data: '_data',
    },
  };
};
