/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path  = require('path'),
    gulp  = require('gulp'),
    log   = require('gulp-util').log,
    load  = require('require-nocache')(module),
    cfg   = path.join(process.env.PATH_ROOT, process.env.PATH_CFG, 'proxy'),
    title = 'proxy   '.inverse;


// task set was turned off in gulp.js
if ( !config ) {
    // do not create tasks
    return;
}


// start call redirection
gulp.task('proxy', function ( done ) {
    var config = load(cfg);

    if ( !config.active ) {
        // just exit
        log(title, 'task is disabled'.grey);

        done();
    }

    // start
    require('code-proxy')(config);
});
