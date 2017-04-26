const data = require('./data.json')

module.exports = [
	{
		name: 'JS',
		path: 'assets/scripts/**/[^_]*.js',
		handler: 'rosid-handler-js'
	},
	{
		name: 'SASS',
		path: 'assets/styles/[^_]*.{css,scss}*',
		handler: 'rosid-handler-sass',
		opts: {
			in: '.scss'
		}
	},
	{
		name: 'NJK',
		path: '(*/*|*).{html,njk}*',
		handler: 'rosid-handler-njk',
		opts: {
			data
		}
	},
	{
		name: 'NJK Component',
		path: 'assets/components/[^_]*/[^_]*.{html,njk}*',
		handler: 'rosid-handler-njk',
		opts: {
			prepend: '{% extends "../_layout.njk" %}{% block body %}',
			append: '{% endblock %}',
			data: Object.assign({}, data, {
				root: '../../../'
			})
		}
	}
]