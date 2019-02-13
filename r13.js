(() => {
	const modes = {
		garbage: () => {
			// so-called 'developers'
			return Math.random()+13;
		},
		pure: () => {
			// me, an intellectual
			var out = Math.random()*100;
			return out >= 13 && out <= 14 ? out : modes.pure();
		}
	};

	const r13 = function()
	{
		var precision = 4;
		var count = 1;
		var mode = 'pure';

		var wrappedPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				let out = [];
				for (let i = 0; i < count; i++) {
					out.push(modes[mode]().toFixed(precision));
				}
				if (count == 1) {
					out = out[0];
				}
				resolve(out);	
			});
		});

		var wrapper = {
			count: (c) => {
				count = c;
				return wrapper;
			},
			precision: (p) => {
				precision = p;
				return wrapper;
			},
			mode: (m) => {
				if (m == 'pure' || m == 'garbage') {
					mode = m;
				}
				return wrapper;
			},
			then: (func) => {
				wrappedPromise.then(func);
			}
		};
		return wrapper;
	}

	if (typeof(module) != 'undefined')
	{
		module.exports = r13;
	} 
	else if (typeof(define) != 'undefined')
	{
		define({r13: r13});
	}
	else if (typeof(window) != 'undefined')
	{
		window.r13 = r13;
	}
})();