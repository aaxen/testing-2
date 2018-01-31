
require([
  // Application.
  	"app",
  	"template/template1"
  	
],

function(App , template1 ) 
{

	var temp1 = new template1.View();
	$("#main").html(temp1.render().el);


	//Disable Image Dragging
	$('body')
        .attr( 'unselectable', 'on' ) 
        .attr( 'draggable', 'false' ) 
        .on( 'dragstart', function() { return false; } );  

  	$('body') 
	    .attr( 'draggable', 'false' )
	    .attr( 'unselectable', 'on' ); 
});