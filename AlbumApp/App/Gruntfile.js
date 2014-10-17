module.exports = function(grunt) {

	grunt
	.initConfig({
		config : {
			path : {
				webapp : {
					root : 'C:/Desenvolvimento/gitRepo/FrameWork/parent/rest/src/main/webapp'
				}
			}
		},
		//pre processador de csss
		less : {
			development : {
				files : {
					"<%= config.path.webapp.root %>/css/app.css" : "App/lib/css/appcss.less"
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
					'<%= config.path.webapp.root %>/js/app.min.js' : [ 'App/lib/js/app.js' ],

				}
			}
		},
		//copia as depedencias do bower para o index.html
		wiredep: {
			target: {
				src: 'App/index.html',

			}
		},
		// automaticamente verifica mudanca no arquivos e executa os plugins
		watch : {
			dist : {
				files : [
				'App/lib/js/**/*',
				'App/lib/css/**/*'
				],

				tasks : [ 'uglify', 'less','wiredep','copy' ]
			}
		},

		copy: {
			main: {
				files: [{expand: true, src: ['App/index.html'], dest: '<%= config.path.webapp.root %>/index.html', filter: 'isFile'}]
			}
		}
	});

	// Plugins do Grunt
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Tarefas que serão executadas
	grunt.registerTask('default', [ 'uglify','less','wiredep','copy' ]);
	grunt.registerTask('w',['watch']);

};