const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const turndown = require("turndown");

function sanitizeMarkdown(markdownContent) {
	const turndownService = new turndown();

	console.log("Markdown Content", markdownContent);

	// convert markdown to html
	const htmlContent = marked.parse(markdownContent);
	console.log("HTML Content", htmlContent);

	// sanitize html
	const sanitizedHtml = sanitizeHtml(htmlContent, {
		allowedTags: sanitizeHtml.defaults.allowedTags,
	});
	console.log("Sanitized HTML", sanitizedHtml);

	// convert sanitized html to markdown
	const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
	console.log("Sanitized Markdown", sanitizedMarkdown);

	return sanitizedMarkdown;
}

module.exports = sanitizeMarkdown;
