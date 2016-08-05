$(document).ready(function() {
	var generateGrid = function (numberOfSquares) {
   		var container = $('#container');
   		container.html("");
    	
    	for(var x = 0; x < numberOfSquares; x++) {
    		var row = "<div class='row "+ x + "'></div>";
    		container.append(row);
    		var currentRow = $('.row.' + x);
       
       		for(var y = 0; y < numberOfSquares; y++) {
        		currentRow.append("<div class='square'></div>");
        	}
    	}

    	$('.square').mouseenter(function () {
    		var currentSquare = $(this);
    		$(this).css("background-color", "red");
   	 	});
    }

	generateGrid(16);

    $('button').on('click', function () {
    	var numberOfSquares = prompt("How many squares per side?");
    	$('.square').css("background-color", "white");
    	generateGrid(numberOfSquares);
    });
});