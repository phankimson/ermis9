module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*!\n' +
                ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under MIT\n' +
                ' */\n',
            },
            build: {
                src: 'js/<%= pkg.name %>.js',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*!\n' +
                ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under MIT\n' +
                ' */\n',
            },
            default: {
                src: ['dist/<%= pkg.name %>.min.css'],
                dest: 'dist/<%= pkg.name %>.min.css',
            },
            bs: {
                src: ['dist/bs-<%= pkg.name %>.min.css'],
                dest: 'dist/bs-<%= pkg.name %>.min.css',
            },
        },
        autoprefixer: {
            options: {
                browsers: [
                    "Android 2.3",
                    "Android >= 4",
                    "Chrome >= 20",
                    "Firefox >= 24",
                    "Explorer >= 8",
                    "iOS >= 6",
                    "Opera >= 12",
                    "Safari >= 6"
                ]
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: '*.css',
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: '*.css',
                    dest: 'dist',
                    ext: '.min.css'
                }]
            }
        },
        clean: {
            dist: 'dist/*'
        }
    });
    // ?????? clean ??????
    grunt.loadNpmTasks('grunt-contrib-clean');
    // ???????????? "uglify" ??????????????????
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // ?????? cssmin ??????
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    // ?????? autoprefixer ??????
    grunt.loadNpmTasks('grunt-autoprefixer');
    // ?????? css ??????
    grunt.loadNpmTasks('grunt-contrib-concat');
    // ?????????????????????????????????
    grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'autoprefixer', 'concat']);
};