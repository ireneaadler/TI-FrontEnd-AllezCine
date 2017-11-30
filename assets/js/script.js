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

			if ($(this).scrollTop() > 600) {
				$('.mon-super-bouton').fadeIn('1000');
				social.fadeIn();
			} else {
				$('.mon-super-bouton').fadeOut('1000');
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
		$('.pop-outer').fadeIn('1000');
	});

	$('.pop-outer').click(function(){
		$('.pop-outer').fadeOut('1000');
	});

	// Display none of the loaded section by default
	$('.more').css('display','none');
	$('.more2').css('display','none');

	// Load for the movies section
	$('.load').click(function(){
		
		$(this).data('clicked', true);

		if ($('.load').data('clicked')) {
			$('.more').fadeIn(500);
		} else {
			$('.more').fadeOut(500);
		}
		
		var $this = $(this);

    	$this.toggleClass('load');

    	if($this.hasClass('load')){
        	$this.text('See More');         
    	} else {
        	$this.text('see less');
    	}
	});

	// Load for the series section
	$('.load2').click(function(){
		
		$(this).data('clicked', true);

		if ($('.load2').data('clicked')) {
			$('.more2').fadeIn(500);
		} else {
			$('.more2').fadeOut(500);
		}
		
		var $this = $(this);

    	$this.toggleClass('load2');

    	if($this.hasClass('load2')){
        	$this.text('See More');         
    	} else {
        	$this.text('see less');
    	}
	});

	// Login form 

	// Plugin options and our code

        $("#modal_trigger").leanModal({
                top: 150,
                overlay: 0.8,
                closeButton: ".modal_close"
        });

        $(function() {
                // Calling Login Form
                $("#login_form").click(function() {
                        $(".social_login").hide();
                        $(".user_login").show();
                        return false;
                });

                // Calling Register Form
                $("#register_form").click(function() {
                        $(".social_login").hide();
                        $(".user_register").show();
                        $(".header_title").text('Register');
                        return false;
                });

                // Going back to Social Forms
                $(".back_btn").click(function() {
                        $(".user_login").hide();
                        $(".user_register").hide();
                        $(".social_login").show();
                        $(".header_title").text('Login');
                        return false;
                });
        });

});

