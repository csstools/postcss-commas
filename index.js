module.exports = function () {
	return {
		postcssPlugin: 'postcss-commas',
		Declaration: function (decl) {
			decl.raws.between = decl.raws.between.replace(/^([\S\s]+?)(\s*:\s*)$/, function ($0, $1, $2) {
				decl.prop = decl.prop.replace(/\s*,\s*$/, '');

				$1.trim().split(/\s*,\s*/).forEach(function (prop) {
					var clone = decl.cloneAfter({
						prop: prop
					});

					clone.raws.between = $2;
				});

				return $2;
			});
		}
	};
};

module.exports.postcss = true;
