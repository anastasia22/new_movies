var grunt = require('grunt');
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-cssmin');


var path = {};
path.scripts = 'app/scripts/**';
path.sass = 'app/styles/sass/**';
path.views = 'app/views/*';

grunt.initConfig({
	watch: {
		scripts: {
			files: [path.scripts, path.views],
			options: {
				livereload: {
					port: 9876
				}
			}
		},
		css: {
			files: [path.sass],
			tasks: ['sass:dev', 'autoprefixer'],
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
		dev: {
			options: {
				sourcemap: 'auto',
				style: 'expanded',
				lineNumbers: true
			},
			files: {
				'app/mainStyle.css': 'app/styles/sass/main.scss'
			}
		},
		prod: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: {
				'app/mainStyle.css': 'app/styles/sass/main.scss'
			}
		}
	},
	autoprefixer: {
	    
  		single_file: {
  			options: {
	      browsers: ['last 2 versions', 'ie 8', 'ie 9']
  		},
			src:'app/mainStyle.css',
			dest: 'app/style.css'
		}

	}, 
	cssmin: {
		options: {
	        keepSpecialComments: 0
	    },
	    site: {
				'app/mainStyle.css': 'app/styles/sass/main.scss'

	    }
	}
});


grunt.registerTask('dev', ['express', 'sass:dev', 'autoprefixer']);
grunt.registerTask('prod', ['sass:prod', 'cssmin']);


grunt.registerTask('default', ['dev', 'watch']);


