var path = require('path');
module.exports = {
    entry:'./app/index.js',
    output:{
        filename:'build.js',
        path: path.resolve(__dirname,"dist")
    },
    module: {
	    rules: [
		    {
		      	 test:/\.tpl\.html$/,
	    		 loader:'html-template-loader'
	    	},
	    
	    ]
  	}
};