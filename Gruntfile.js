var grunt = require('grunt');
grunt.loadNpmTasks('grunt-express-server');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-mkdir');


var path = {};
path.scripts = 'app/scripts/**';
path.sass = 'app/styles/**';
path.views = 'app/views/*';
path.index = './index.html'
path.vendors = 'app/scripts/vendors/**'

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	watch: {
		scripts: {
			files: [path.scripts],
			tasks: ['copy:scripts'],
			options: {
				livereload: {
					port: 9876
				}
			}
		},
		views: {
			files: [path.views],
			tasks: ['copy:views'],
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
		},
		index: {
			files: [path.index],
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
  		options: {
	      browsers: ['last 2 versions', 'ie 8', 'ie 9']
  		},
  		dev: {
			src:'dist/style.css',
			dest: 'dist/style.css'
		}

	}, 
	
	concat: {
	    options: {
	    	separator: ';\n'
	    },	
    	prod: {
      		src: ['app/scripts/controllers/**', 'app/scripts/directives/**', 'app/scripts/modules/**', 'app/scripts/services/**', 'app/scripts/app.js'],
  			dest: 'dist/built.js'
  		}
	},
	copy: {
			scripts: {expand: true, cwd: 'app/scripts', src: ['**'], dest: 'dist/scripts'},
			//index: {expand: true, src: [path.index], dest: 'dist/', filter: 'isFile', flatten: true},
			views: {expand: true, cwd: 'app/views', src: ['**'], dest: 'dist/views'}
	},
	clean: ["dist/"],
	mkdir: {
		all: {
			options: {
		        create: ['dist']
		    }
		}
      },
});

//build tasks
grunt.registerTask('dev', ['clean', 'mkdir', 'sass:dev', 'autoprefixer', 'copy']);
grunt.registerTask('prod', ['clean', 'mkdir', 'sass:prod', 'autoprefixer', 'concat']);



grunt.registerTask('default', ['dev', 'express', 'watch']);


