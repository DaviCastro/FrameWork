module.exports = function(grunt) {
	
	require('load-grunt-tasks')(grunt);
/*
 * Com o plugin acima nao e necessario a declaracao abaixo // Plugins do Grunt
 * grunt.loadNpmTasks('grunt-contrib-uglify');
 * grunt.loadNpmTasks('grunt-contrib-less');
 * grunt.loadNpmTasks('grunt-wiredep'); grunt.loadNpmTasks(
 * 'grunt-contrib-watch' ); grunt.loadNpmTasks('grunt-contrib-copy');
 * grunt.loadNpmTasks('grunt-bower-install-simple');
 * grunt.loadNpmTasks('grunt-usemin');
 * 
 */
 grunt
 .initConfig({
 	config: {
 		path: {
 			webapp: {
 				root: 'src/main/webapp'
 			},
 			index:{
 				root:'App/'
 			}
 		}
 	},
 		//copia index original para webapp
 		copy: {
 			build: {
 				files: [
 				{
 					src: '<%= config.path.index.root %>/index.html',
 					dest: '<%= config.path.webapp.root %>/index.html'
 				}
 				]
 			}
 		},
		// pre processador de csss
		less : {
			development : {
				files : {
					"<%= config.path.webapp.root %>/css/app.css" : "App/lib/css/appcss.less"
				}
			}
		},
		// minimifica o arquivo js
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
		// copia as depedencias do bower para o index.html
		wiredep: {
			options:{
				directory:'<%= config.path.webapp.root %>/lib'
			},
			
			target: {
				src: '<%= config.path.webapp.root %>/index.html',
				ignorePath: '<%= config.path.webapp.root %>'

			}
		},
		// automaticamente verifica mudanca no arquivos e executa os plugins
		watch : {
			dist : {
				files : [
				'App/**/*',				
				],

				tasks : [ 'copy:build','emberTemplates', 'uglify','less','wiredep' ]
			}
		},

		emberTemplates: {
			compile: {
				options: {
					amd: true,
				},
				files: {
					"<%= config.path.webapp.root %>/js/emberTemplates.js": "App/**/*.hbs"
				}
			}
		},


		"bower-install-simple": {
			options: {
				color: true,
				directory: '<%= config.path.webapp.root %>/lib'
			},
			"prod": {
				options: {
					production: true
				}
			},
			"dev": {
				options: {
					production: false
				}
			}
		}
	});


	// Tarefas que serão executadas
	grunt.registerTask('default', ['copy:build', 'uglify','less','wiredep' ]);
	grunt.registerTask('w',['watch']);
	grunt.registerTask('i',['copy:build','bower-install-simple','less','emberTemplates','uglify','wiredep']);

};