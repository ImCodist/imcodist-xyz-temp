module.exports = async function(eleventyConfig) {
    inputDir = "src";

	eleventyConfig.setInputDirectory(inputDir);
    eleventyConfig.setLayoutsDirectory("_layouts");

    eleventyConfig.addPassthroughCopy(`${inputDir}/assets`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/css`);
    eleventyConfig.addPassthroughCopy(`${inputDir}/js`);
};