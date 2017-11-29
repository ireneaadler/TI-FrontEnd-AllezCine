// Age scan with redirection

// if(Number(prompt("Quel âge avez-vous ?")) >= 18) {
// 		alert("Félicitations ! Vous avez accès au site");
// } else {
// 		window.location.href = "http://www.nathan.fr/tchoupi/";
// }

$(document).ready(function() {

	// 1. Create the button

	var button = document.createElement("div");
	var icon = "<i class='fa fa-arrow-up'></i>";
	button.classList.add('mon-super-bouton');
	button.classList.add('hidden');
	button.href = "#top";
	button.innerHTML += icon;

	var social = $('.social-media');

	// 2. Append somewhere

	var body = document.getElementsByClassName('main')[0];
	body.appendChild(button);

	// 3. Add event handler with jQuery tho'! Because it is easier!

	$('.main').scroll(function() {
		
			var leScroll = $('.main').scrollTop();
				console.log(leScroll);

			if ($(this).scrollTop() > 600) {
				$('.mon-super-bouton').fadeIn('fast');
				social.fadeIn();
			} else {
				$('.mon-super-bouton').fadeOut('fast');
				social.fadeOut();
			} 

	});

	$('.mon-super-bouton').click(function(e){

			e.preventDefault();

			var hash = this.hash;
			
			$('.main').animate (
				{ 
					'scrollTop': '0' 
				}, 600
				);

	});

	$('.video').click(function(){
		$('.pop-outer').fadeIn('fast');
	});

	$('.pop-outer').click(function(){
		$('.pop-outer').fadeOut('fast');
	});

});

