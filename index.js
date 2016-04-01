/**
 * Clean empty strings
 *
 * @module cln
 */

function clean (str) {
	return str.trim()

	//remove empty lines
	.replace(/^\s*\n/gm, '')

	//remove indentation/tabulation
	.replace(/^\s*/gm, '')

	//transform all \r to \n
	.replace(/[\n\r]+/g, '\n')

	//replace duble spaces/tabs to single ones
	.replace(/(\s)\s+/g, '$1')
}

module.exports = clean;