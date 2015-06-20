
// Credit to http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {
	$(".forabg .posts, .forabg .topics, .forumbg .posts, .forumbg .views, .statistics strong, .commastats").each(function() {
		// Gets the value
		var value = $(this).html();

		// Prevents the latest user from being formatted
		if (value.indexOf("<a") > -1) {
			return;
		}

		// Removes the text which prosilver includes (invisibly) by the number
		if (value.indexOf("<dfn") > -1) {
			value = value.substr(0, value.indexOf("<dfn"));
		}

		// Formats the number, if it is a number
		if (jQuery.isNumeric(value)) {
			value = numberWithCommas(value);
			$(this).text(value);
		}
	});
});
