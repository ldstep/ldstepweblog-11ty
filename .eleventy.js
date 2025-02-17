const { DateTime } = require("luxon");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
   // Add RSS Plugin
   eleventyConfig.addPlugin(rssPlugin);

   // Custom filter to limit array length
   eleventyConfig.addFilter("limit", function (array, limit) {
      return array.slice(0, limit);
   });

   // Set Template Formats
   eleventyConfig.setTemplateFormats([
      "html",
      "njk",
      "md",
      "css",
      "jpeg",
      "jpg",
      "png",
      "svg",
      "woff",
      "woff2",
   ]);

   // Add passthrough copy for CSS
   eleventyConfig.addPassthroughCopy("./src/css/");
   eleventyConfig.addPassthroughCopy({ "src/public/style.css": "style.css" });

   // Add watch targets
   eleventyConfig.addWatchTarget("./src/css/");
   eleventyConfig.addWatchTarget("./src/public/style.css");

   // Date filter
   eleventyConfig.addFilter("htmlDateString", (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
         "yyyy-LL-dd"
      );
   });

   // Configure BrowserSync
   eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

   // Build post collection
   eleventyConfig.addCollection("posts", function (collection) {
      const coll = collection.getFilteredByTag("posts").reverse();

      // Add previous and next post references
      for (let i = 0; i < coll.length; i++) {
         const prevPost = coll[i - 1];
         const nextPost = coll[i + 1];
         coll[i].data["prevPost"] = prevPost;
         coll[i].data["nextPost"] = nextPost;
      }

      return coll;
   });

   return {
      dir: {
         input: "src",
         output: "public",
      },
   };
};
