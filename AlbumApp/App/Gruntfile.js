module.exports = function(grunt) {

	grunt
	.initConfig({
		config : {
			path : {
				webapp : {
					root : 'C:/Desenvolvimento/gitRepo/FrameWork/parent/rest/src/main/webapp'
				},
				temp : {
					root : 'temp'
				},
				build : {
					root : 'build'
				}
			}
		},
		//pre processador de csss
		less : {
			development : {
				files : {
					"path/to/result.css" : "path/to/source.less"
				}
			}
		},
		//minimifica o arquivo js
		uglify : {
			options : {
				mangle : false
			},

			my_target : {
				files : {
					'<%= config.path.webapp.root %>/js/app.min.js' : [ 'assets/_js/scripts.js' ]
				}
			}
		},
		//copia as depedencias do bower para o index.html
		 wiredep: {
                target: {
                    src: '<%= config.path.webapp.root %>/index.html',
                    ignorePath: '<%= config.path.webapp.root %>'
                }
            },

	});

	// Plugins do Grunt
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-wiredep');

	// Tarefas que serão executadas
	grunt.registerTask('default', [ 'uglify','less', ]);

};