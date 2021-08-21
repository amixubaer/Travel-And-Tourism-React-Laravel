<!DOCTYPE HTML>
<html>
	<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="{{asset('css/style.css')}}">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Give Review</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="" />
	<meta name="keywords" content="" />
	<meta name="author" content="" />

  <!-- Facebook and Twitter integration -->
	<meta property="og:title" content=""/>
	<meta property="og:image" content=""/>
	<meta property="og:url" content=""/>
	<meta property="og:site_name" content=""/>
	<meta property="og:description" content=""/>
	<meta name="twitter:title" content="" />
	<meta name="twitter:image" content="" />
	<meta name="twitter:url" content="" />
	<meta name="twitter:card" content="" />

	<link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet">
	
	<!-- Animate.css -->
	<link rel="stylesheet" href="{{asset('css/animate.css')}}">
	
	<!-- Icomoon Icon Fonts-->
	<link rel="stylesheet" href="{{asset('css/icomoon.css')}}">
	
	<!-- Bootstrap  -->
	<link rel="stylesheet" href="{{asset('css/bootstrap.css')}}">

	<!-- Magnific Popup -->
	<link rel="stylesheet" href="{{asset('css/magnific-popup.css')}}">

	<!-- Flexslider  -->
	<link rel="stylesheet" href="{{asset('css/flexslider.css')}}">
	
	<!-- Owl Carousel -->
	<link rel="stylesheet" href="{{asset('css/owl.carousel.min.css')}}">
	<link rel="stylesheet" href="{{asset('css/owl.theme.default.min.css')}}">
	
	<!-- Date Picker -->
	<link rel="stylesheet" href="{{asset('css/bootstrap-datepicker.css')}}">

	<!-- Flaticons  -->
	<link rel="stylesheet" href="{{asset('fonts/flaticon/font/flaticon.css')}}">

	<!-- Theme style  -->
	

	<!-- Modernizr JS -->
	<script src="{{ asset('js/modernizr-2.6.2.min.js')}}"></script>
	
	<!-- FOR IE9 below -->
	<!--[if lt IE 9]>
	<script src="js/respond.min.js"></script>
	<![endif]-->

	</head>
	<body>
		
	<div class="colorlib-loader"></div>

	<div id="page">
		<nav class="colorlib-nav" role="navigation">
			<div class="top-menu">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xs-2">
							<div id="colorlib-logo"><a href="{{route('user.home')}}">Tour</a></div>
						</div>
						<div class="col-xs-10 text-right menu-1">
							<ul>
								<li class="active"><a href="{{route('user.home')}}">Home</a></li>
								<li class="has-dropdown">
									<a href="#">Booking</a>
									<ul class="dropdown">
										<li><a href="{{route('userFlight.index')}}">Flight</a></li>
										<li><a href="{{route('userHotel.index')}}">Hotels</a></li>
										<li><a href="{{route('userCar.index')}}">Car</a></li>
									</ul>
								</li>
								<li class="has-dropdown">
									<a href="#">Service</a>
									<ul class="dropdown">
										<li><a href="{{route('userDestination.showdestination')}}">Destination</a></li>
										<li><a href="{{route('userPackage.showPackage')}}">Packages</a></li>
										<li><a href="{{route('userHotels.showHotel')}}">Hotels</a></li>
										<li><a href="{{route('userFlightList.showFlightList')}}">Flight</a></li>
										<li><a href="{{route('userCarList.showCarList')}}">Car</a></li>
									</ul>
								</li>
								<li><a href="{{route('userTravelHistory.index')}}">Travel History</a></li>
								<li><a href="{{route('userGuideline.showGuideline')}}">Travel Guideline</a></li>
								<li><a href="{{route('userNotification.index')}}">Noification</a></li>
								<li class="has-dropdown">
									<a href="#">About</a>
									<ul class="dropdown">
										<li><a href="{{route('userAbout.index')}}">About Us</a></li>
										<li><a href="{{route('userContact.index')}}">Contact Us</a></li>
										<li><a href="{{route('userPrivacy.index')}}">Privacy Policy</a></li>
										<li><a href="{{route('userFaq.index')}}">FAQ</a></li>
									</ul>
								</li>
								<li><a href="{{route('userReview.index')}}">Review</a></li>
								<li><a href="{{route('userProfile.userprofile')}}">{{session('uname')}}</a></li>
								<li><a href="{{route('logout.index')}}">LogOut</i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
		
		<aside id="colorlib-hero">
			<div class="flexslider">
				<ul class="slides">
			   	<li style="background-image: url({{asset('img/cover-img-3.jpg')}});">
			   		<div class="overlay"></div>
			   		<div class="container-fluid">
			   			<div class="row">
				   			<div class="col-md-6 col-md-offset-3 col-sm-12 col-xs-12 slider-text">
				   				<div class="slider-text-inner text-center">
				   					<h1>Give Review</h1>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
			   	</li>
			  	</ul>
		  	</div>
		</aside>

		<div id="colorlib-contact">
			<div class="container">
				<div class="row">
					<div class="col-md-10 col-md-offset-1 animate-box">

						<h3>Give Review</h3>
						<form method="POST">
						@csrf

						<div class="row form-group">
								<div class="col-md-12">
									<label for="service_id">Service ID:</label>
									<input type="text" name="service_id" id="service_id">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label for="service_type">Servicer Type:</label>
									<select name="service_type" id="service_type">
										<option value="hotel">Hotel</option>
										<option value="car">Car</option>
										<option value="flight">Flight</option>
									</select>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label for="company">Company Name:</label>
									<select name="company" id="company">
										<option value="X Company">X Company</option>
										<option value="Y Company">Y Company</option>
										<option value="Z Company">Z Company</option>
										<option value="M Company">M Company</option>
									</select>
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label for="user_id">User ID:</label>
								<input type="text" name="user_id" id="user_id" value="{{session('id')}}">
							</div>
						</div>

						<div class="row form-group">
							<div class="col-md-12">
								<label for="rating">Rating:</label>
									<select name="rating" id="rating">
										<option value="*****">*****</option>
										<option value="****">****</option>
										<option value="***">***</option>
										<option value="**">**</option>
										<option value="*">*</option>
									</select>
							</div>
						</div>

							<div class="row form-group">
								<div class="col-md-12">
									<label for="msg">Message</label>
									<textarea name="msg" id="msg" cols="30" rows="10" class="form-control" placeholder="Say something about us"></textarea>
								</div>
							</div>
							<div class="form-group text-center">
								<input type="submit" value="Give Review" class="submit" name="submit" id="submit"/>
							</div>

						</form>	

						<div class='error'>
							@foreach ($errors->all() as $err)
								{{$err}}
								<br>
							@endforeach
                		</div>	

					</div>
					<div class="col-md-10 col-md-offset-1 animate-box">
						<h3>Contact Information</h3>
						<div class="row contact-info-wrap">
							<div class="col-md-3">
								<p><span><i class="icon-location"></i></span> 198 West 21th Street, <br> Suite 721 New York NY 10016</p>
							</div>
							<div class="col-md-3">
								<p><span><i class="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
							</div>
							<div class="col-md-3">
								<p><span><i class="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
							</div>
							<div class="col-md-3">
								<p><span><i class="icon-globe"></i></span> <a href="#">yoursite.com</a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	
		<div id="colorlib-subscribe" style="background-image: url({{asset('img/img_bg_2.jpg')}});" data-stellar-background-ratio="0.5">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3 text-center colorlib-heading animate-box">
						<h2>Thank You For Visiting</h2>
					</div>
				</div>
			</div>
		</div>

		<footer id="colorlib-footer" role="contentinfo">
			<div class="container">
				<div class="row row-pb-md">
					<div class="col-md-3 colorlib-widget">
						<h4>Tour Agency</h4>
						<p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
						<p>
							<ul class="colorlib-social-icons">
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-linkedin"></i></a></li>
								<li><a href="#"><i class="icon-dribbble"></i></a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-2 colorlib-widget">
						<h4>Book Now</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><a href="#">Flight</a></li>
								<li><a href="#">Hotels</a></li>
								<li><a href="#">Tour</a></li>
								<li><a href="#">Car Rent</a></li>
								<li><a href="#">Beach &amp; Resorts</a></li>
								<li><a href="#">Cruises</a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-2 colorlib-widget">
						<h4>Top Deals</h4>
						<p>
							<ul class="colorlib-footer-links">
								<li><a href="#">Edina Hotel</a></li>
								<li><a href="#">Quality Suites</a></li>
								<li><a href="#">The Hotel Zephyr</a></li>
								<li><a href="#">Da Vinci Villa</a></li>
								<li><a href="#">Hotel Epikk</a></li>
							</ul>
						</p>
					</div>
					<div class="col-md-2">
						<h4>Blog Post</h4>
						<ul class="colorlib-footer-links">
							<li><a href="#">The Ultimate Packing List For Female Travelers</a></li>
							<li><a href="#">How These 5 People Found The Path to Their Dream Trip</a></li>
							<li><a href="#">A Definitive Guide to the Best Dining and Drinking Venues in the City</a></li>
						</ul>
					</div>

					<div class="col-md-3 col-md-push-1">
						<h4>Contact Information</h4>
						<ul class="colorlib-footer-links">
							<li>291 South 21th Street, <br> Suite 721 New York NY 10016</li>
							<li><a href="tel://1234567920">+ 1235 2355 98</a></li>
							<li><a href="mailto:info@yoursite.com">info@yoursite.com</a></li>
							<li><a href="#">yoursite.com</a></li>
						</ul>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center">
						<p>
							<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is Brought To You By <i class="icon-heart2" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Code-Projects.Org</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></span> 
							<span class="block">Demo Images: <a href="http://unsplash.co/" target="_blank">Unsplash</a> , <a href="http://pexels.com/" target="_blank">Pexels.com</a></span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	</div>

	<div class="gototop js-top">
		<a href="#" class="js-gotop"><i class="icon-arrow-up2"></i></a>
	</div>

	<!-- jQuery -->
	<script src="{{ asset('js/jquery.min.js')}}"></script>

	<!-- jQuery Easing -->
	<script src="{{ asset('js/jquery.easing.1.3.js')}}"></script>

	<!-- Bootstrap -->
	<script src="{{ asset('js/bootstrap.min.js')}}"></script>

	<!-- Waypoints -->
	<script src="{{ asset('js/jquery.waypoints.min.js')}}"></script>
	
	<!-- Flexslider -->
	<script src="{{ asset('js/jquery.flexslider-min.js')}}"></script>
	
	<!-- Owl carousel -->
	<script src="{{ asset('js/owl.carousel.min.js')}}"></script>
	
	<!-- Magnific Popup -->
	<script src="{{ asset('js/jquery.magnific-popup.min.js')}}"></script>
	<script src="{{ asset('js/magnific-popup-options.js')}}"></script>
	
	<!-- Date Picker -->
	<script src="{{ asset('js/bootstrap-datepicker.js')}}"></script>
	
	<!-- Stellar Parallax -->
	<script src="{{ asset('js/jquery.stellar.min.js')}}"></script>

	<!-- Main -->
	<script src="{{ asset('js/main.js')}}"></script>

	<style>
.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
</style>

	<script>


				/* When the user clicks on the button, 
				toggle between hiding and showing the dropdown content */
				function myFunction() {
				document.getElementById("myDropdown").classList.toggle("show");
				}

				// Close the dropdown if the user clicks outside of it
				window.onclick = function(event) {
				if (!event.target.matches('.dropbtn')) {
					var dropdowns = document.getElementsByClassName("dropdown-content");
					var i;
					for (i = 0; i < dropdowns.length; i++) {
					var openDropdown = dropdowns[i];
					if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
					}
					}
				}
				}
</script>

	</body>
</html>

