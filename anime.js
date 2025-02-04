var titles = {
	0 : '',
	1 : 'TIMELINE',
	2 : 'GIT',
	3 : 'BLOG'
};




$(document).on( 'scroll', function(event){

   	$("#title").text(
   		titles[Math.floor(document.body.scrollTop/window.innerHeight)]
   		);

});