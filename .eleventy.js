const { DateTime } = require("luxon");
const rssPlugin = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
   // Add RSS Plugin
   eleventyConfig.addPlugin(rssPlugin, {
      type: "atom",
      outputPath: "/feed.xml",
      collection: "posts",
      limit: 10,
      metadata: {
         language: "en",
         title: "lstep.xyz",
         subtitle: "A blog by Loren.",
         base: "https://lstep.xyz",
         author: { name: "Loren", email: "" },
      },
   });

   // Set template formats
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

   // Add passthrough copy for static assets
   eleventyConfig.addPassthroughCopy("./src/css/");
   eleventyConfig.addPassthroughCopy({ "src/public/style.css": "style.css" });

   // Watch target for CSS changes
   eleventyConfig.addWatchTarget("./src/css/");
   eleventyConfig.addWatchTarget("./src/public/style.css");

   // Filter for formatting dates
   eleventyConfig.addFilter("htmlDateString", (dateObj) => {
      return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
         "yyyy-LL-dd"
      );
   });

   // Disable ghostMode in BrowserSync
   eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

   // Collection: Posts
   eleventyConfig.addCollection("posts", function (collection) {
      const coll = collection.getFilteredByTag("posts").reverse();
      for (let i = 0; i < coll.length; i++) {
         coll[i].data["prevPost"] = coll[i - 1] || null;
         coll[i].data["nextPost"] = coll[i + 1] || null;
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
