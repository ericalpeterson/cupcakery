/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

  function myFunction() { 
  alert("Warning! Most Delicious Cupcakes!");
                        } 

// When the user clicks on <div>, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

$(document).ready(function(){
	$(".checkout").on("keyup", ".quantity", function(){
		var price = +$(".price").data("price");
		var quantity = +$(this).val();
		$("#total").text("$" + price * quantity);
	})
})

