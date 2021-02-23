const configBuilder = require('webpack-sagess').configBuilder;
const customConfig = {
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        // 'redux-devtools': 'redux-devtools',
        moment: 'moment',
        lodash: 'lodash'
    }
}

module.exports = configBuilder(customConfig);
