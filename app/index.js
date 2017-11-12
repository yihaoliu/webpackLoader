import _ from 'lodash';
var hello=require('../loader/hello.tpl.html');
var world = require('../loader/world.tpl.html');
function component(){
    // var element  = document.createElement("div");
    // element.innerHTML = _.join([tpl]," ");
    return (
    	'<div>'+
    		'<h1>loader</h1>'+
    		 hello()+
    		 world()+
    	'<div>'
    	)
}
document.body.innerHTML =component() ;
// component();