var grunt = require('grunt');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-livereload');

var path = {};
path.scripts = 'app/scripts/**';
path.sass = 'app/styles/sass/**';
path.views = 'app/views/*';

grunt.initConfig({
  watch: {
	  scripts: 
	  {
	    files: [path.scripts, path.views],
	    tasks: ['world']
	  },
	  css: {
  		files: [path.sass],
	    tasks: ['world']
	  }

});

grunt.registerTask('world', 'world task description', function(){
  console.log('hello world');
});

grunt.registerTask('hello', 'say hello', function(name){
  if(!name || !name.length)
    grunt.warn('you need to provide a name.');

  console.log('hello ' + name);
});


grunt.registerTask('default', ['world', 'hello:adrian', 'watch']);