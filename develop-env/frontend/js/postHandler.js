var times = 0
var isBottom = -1;
var isWaiting = false;

function assignVisual(e) {

	$(document).ready(function () {


  		$("#"+String(e)).click(function() {
  			$(this).animate({
  				height: "150px"
  			}, 200, function() {
  				//on finish
  			});
		});

		$("#"+String(e)).focusout(function() {
  			$(this).animate({
  				height: "100%"
  			}, 200, function() {
  				//on finish
  			});
		});

	});

}

function communityOver() {

	if (!isWaiting) {

		$('#community-container').on('mousewheel', function(event) {
			
			times += 1;
			var element = $('#community-container');

			var approximation = Math.abs(element[0].scrollHeight - element[0].scrollTop);

			flag = (approximation+0.5 > element[0].clientHeight && approximation-0.5 < element[0].clientHeight);

		    if (event.originalEvent.wheelDelta < -50 && flag) {
		    	times = 0;
		    	isWaiting = true;
				
				$.ajax({
					type:"get",
					url:"/posts",
					dataType: 'html',
					contentType: 'application/html',
					success: function(data) {
						console.log("success");
						element.append(data);
						isWaiting = false;
				 	}
				});

		    }

		});
	}

}
