var grunt = require('grunt');
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-autoprefixer');


var path = {};
path.scripts = 'app/scripts/**';
path.sass = 'app/styles/sass/**';
path.views = 'app/views/*';
path.index = 'index.html'

grunt.initConfig({
	watch: {
		scripts: {
			files: [path.scripts, path.views, path.index],
			options: {
				livereload: {
					port: 9876
				}
			}
		},
		css: {
			files: [path.sass],
			tasks: ['sass', 'autoprefixer'],
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
	}, 
	sass: {
		options: {
			sourceMap: true
		},
		dist: {
			files: {
			'app/mainStyle.css': 'app/styles/sass/main.scss'
			}
		}
	},
	autoprefixer: {
	    options: {
	      browsers: ['last 2 versions', 'ie 8', 'ie 9'],
	      src: 'app/mainStyle.css',
	      dest: 'app/mainStyle.css'
	    }
	}
});

grunt.registerTask('build', ['express', 'sass', 'autoprefixer']);

grunt.registerTask('default', ['build', 'watch']);


