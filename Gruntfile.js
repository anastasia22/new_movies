var grunt = require('grunt');
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
// grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');


var path = {};
path.scripts = 'app/scripts/**';
path.sass = 'app/styles/**';
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
		styles: {
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
				'dist/style.css': 'app/styles/main.scss'
			}
		},
		prod: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: {
				'dist/style.css': 'app/styles/main.scss'
			}
		}
	},
	autoprefixer: {
	    
  		single_file: {
  			options: {
	      browsers: ['last 2 versions', 'ie 8', 'ie 9']
  		},
			src:'app/styles/main.scss',
			dest: 'dist/style.css'
		}

	}, 
	// cssmin: {
	// 	options: {
	//         keepSpecialComments: 0
	//     },
	//     site: {
	// 			'dist/style.css': 'app/styles/main.scss'
	//     }
	// },
	concat: {
	    options: {
	      separator: ';\n',
      		src: [path.scripts],
  			dest: 'dist/built.js'
	    }
	}
});


grunt.registerTask('dev', ['express', 'sass:dev', 'autoprefixer']);
grunt.registerTask('prod', ['sass:prod', 'cssmin' ]);


grunt.registerTask('default', ['dev', 'watch']);


