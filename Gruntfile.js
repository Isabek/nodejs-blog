module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        copy: {
            bootstrap: {
                files: [
                    {
                        src: ["bower_components/bootstrap/dist/js/bootstrap.min.js"],
                        dest: "application/public/js",
                        expand: true,
                        flatten: true
                    },
                    {
                        src: ["bower_components/bootstrap/dist/css/bootstrap.min.css"],
                        dest: "application/public/css",
                        expand: true,
                        flatten: true
                    },
                    {
                        src: [
                            "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
                            "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
                            "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
                            "bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff"
                        ],
                        dest: "application/public/fonts",
                        expand: true,
                        flatten: true
                    }
                ]
            },
            jquery: {
                files: [
                    {
                        src: [
                            "bower_components/jquery/dist/jquery.min.js",
                            "bower_components/jquery/dist/jquery.min.map"
                        ],
                        dest: "application/public/js",
                        expand: true,
                        flatten: true
                    }
                ]
            }
        }
    });

    grunt.registerTask("build", ["copy"]);
    grunt.registerTask("default", ["build"]);
};