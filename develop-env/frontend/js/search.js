//search

function search() {

	$(document).ready(function() {


		var data = $('#searchBox');

		$.ajax({
				type:"get",
				url:"/home/search-friends",
				dataType: 'html',
				data: data.val(),
				contentType: 'application/html',
				success: function(friend) {
					
					var result = "<li>"+friend+"</li>";

					$('#searchResults').append(result)
			 	}
			});

	});
}

function searchFocusOut() {
	
	$(document).ready(function() {

		var data = $('#searchBox').focusout(function() {
			$('#searchResults').children().fadeOut("fast", function() {
				$(this).remove();
			});
		});
	});
}