var grunt = require('grunt');
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-sass');


var path = {};
path.scripts = 'app/scripts/**';
path.sass = 'app/styles/sass/**';
path.views = 'app/views/*';
path.index = 'index.html'

grunt.initConfig({
	watch: {
		scripts: {
			files: [path.scripts, path.views, path.index],
			tasks: ['jshint'],
			options: {
				livereload: {
					port: 9876
				}
			}
		},
		css: {
			files: [path.sass],
			tasks: ['sass'],
			options: {
				livereload: {
					port: 9876
				}
			}
		}
	},
	express: {
		options: {
			port: 5555
		},
		dev: {
			options: {
				script: 'server.js'
			}
		}
	// prod: {
	//   options: {
	//     script: 'path/to/prod/server.js',
	//     node_env: 'production'
	//   }
	// },
	}, 
	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
			'app/styles/mainStyle.css': 'app/styles/sass/main.scss'
			}
		}
	},
	jshint: {
		all: [path.scripts]
	}


});

grunt.registerTask('default', ['express', 'sass', 'watch']);


