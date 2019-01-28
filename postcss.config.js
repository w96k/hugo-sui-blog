const purgecss = require('@fullhuman/postcss-purgecss');
const assets  = require('postcss-assets');

module.exports = {
    plugins: [
        purgecss({
            content: ['./**/*.html']
        }),
        assets({
            basePath: 'semantic/themes/default/assets',
            relative: 'true',
            loadPaths: ['fonts/', 'images/']
        })
    ]
    };
