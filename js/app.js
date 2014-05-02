$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	}).mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '800px'}, 
			700, function () {
				$(this).hide();
				$(this).css('left', '-200px');
			}
		);
	}).mouseup(function() {
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});
	$(document).keydown(function(event) {
 		if(event.which == 88) {
 			$('.ryu-cool').show();
 			$('.ryu-still').hide();
 			$('.ryu-ready').hide();
		}
	}).keyup(function(event){
		if(event.which == 88) {
 			$('.ryu-cool').hide();
 			$('.ryu-throwing').hide();
 			$('.ryu-ready').hide();
 			$('.ryu-still').show();
		}
	});
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.2;
 // $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}