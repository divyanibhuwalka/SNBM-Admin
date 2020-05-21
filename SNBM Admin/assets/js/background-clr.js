// JavaScript Document


    $(document).ready(function(){
			$(".veen .rgstr-btn button").click(function(){
				$('.veen .home-wrapper').addClass('move');
				$('.body').css('background','url(../assets/images/bg2.jpg)');
				$(".veen .login-btn button").removeClass('active');
				$(this).addClass('active');

			});
			$(".veen .login-btn button").click(function(){
				$('.veen .home-wrapper').removeClass('move');
				$('.body').css('background','url(../assets/images/bg2.jpg)');
				$(".veen .rgstr-btn button").removeClass('active');
				$(this).addClass('active');
                $("input, textarea").val("");
			});
		});
