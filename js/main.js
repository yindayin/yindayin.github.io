(function($) {
	"use strict"
	var team = [
		  {"id":'Chime',
			"name": 'Chime Dolma',
		  "position": 'President and Co-Founder',
		  "imgpath":'img/CD.jpg',
		  "description": 'Chime Dolma is our President and Co-founder. She holds a M.A. International Educational Development from Teachers College, Columbia University and a B.A. in Political Science and Chinese Language from Middlebury College. She is currently the Assistant Director of Service Learning and a faculty in the History and Global Studies Department at Riverdale Country School in the Bronx. Chime Dolma grew up in Tibet as an illiterate nomadic yak herder before leaving behind her family to pursue a chance at education in India. She immigrated to the United States, and despite her hardships she was the recipient of several notable scholarships. She is regularly invited to speak at various venues on education policy and her own unique experience.'},
			{"id":'Tashi',
			"name": 'Tashi Tenzin',
		  "position": 'COO and Co-Founder',
		  "imgpath":'img/TT.png',
		  "description": 'Tashi Tenzin is our Chief Operating Officer and Co-Founder. He graduated from the Minzu University in Beijing, China with a degree in Mathematics on a full scholarship. Tashi Tenzin was born and raised in Eastern Tibet where he spent his summer vacations herding yaks and picking mushrooms to pay for his school tuition. Tashi co-founded YindaYin Coaching with a strong passion for providing educational opportunities to all students, including those who have limited resources like he did growing up. He has years of experience in government service, non profit work and as an educator. In addition to his management role, he also teaches Chinese Mandarin language and Math.'},
			{"id":'Rinchen',
			"name": 'Rinchen Tara',
		  "position": 'New York Center Director',
		  "imgpath":'img/RT.png',
		  "description": 'Rinchen Tara is our New York Center Director. She obtained her B.A from Duke University in International Comparative Studies and will begin her M.A. in Education at Teachers College, Columbia University in 2019. Rinchen was also born into a semi-farming family in Tibet and is one of the first children in her region to attend school, let alone university. She believes that education should not be taken for granted, and she hopes to impart that appreciation for knowledge to her students.'},
			{"id":'Bryan',
			"name": 'Bryan Chen',
		  "position": 'Lead SAT and Math Instructor',
		  "imgpath":'img/BC.png',
		  "description": 'Bryan Chen is our Lead SAT and Math instructor. He obtained his Bachelor’s degree from Swarthmore College, where he studied Dance, Asian Studies, and Chemistry. Bryan is a Taiwanese-American born and raised in New Jersey. He has held a variety of instructing positions, including a SAT tutor, teaching assistant for Organic Chemistry and Biochemistry, assistant dance instructor in Kathak, and Yo-Yo instructor. Bryan is passionate about education equality for students from working class, immigrant, and refugee backgrounds. Bryan runs the SAT program along with math classes for elementary school to high school students. In his spare time, Bryan runs a Taiwanese food pop-up restaurant, works on art projects, and supports local and national grassroots movements for justice and liberation.'},
			{"id":'Tenzin',
			"name": 'Tenzin Saldon Dostang',
		  "position": 'Lead English Instructor',
		  "imgpath":'img/TSD.jpg',
		  "description": 'Bryan Chen is our Lead SAT and Math instructor. He obtained his Bachelor’s degree from Swarthmore College, where he studied Dance, Asian Studies, and Chemistry. Bryan is a Taiwanese-American born and raised in New Jersey. He has held a variety of instructing positions, including a SAT tutor, teaching assistant for Organic Chemistry and Biochemistry, assistant dance instructor in Kathak, and Yo-Yo instructor. Bryan is passionate about education equality for students from working class, immigrant, and refugee backgrounds. Bryan runs the SAT program along with math classes for elementary school to high school students. In his spare time, Bryan runs a Taiwanese food pop-up restaurant, works on art projects, and supports local and national grassroots movements for justice and liberation.'},
			{"id":'James',
			"name": 'James Liao',
		  "position": 'CTO',
		  "imgpath":'img/JZ.jpg',
		  "description": 'James Liao is our Chief Technology Advisor. A proud Global Citizen, James believes everyone should have equal education opportunities that enable them to become self-motivated lifelong learners. He makes a living as User Experience and App Development Consultant at Microsoft, and specializes in Design Thinking and Agile UX coaching. He makes a life as a Technology Executive Director, a volunteer at TecShare, a global Citizen Base Initiative building cloud technology app solutions to improve children’s education in underserved communities worldwide.'},

		]
	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(600).fadeOut();
		createccards();
		createoverlays();
	});
	
	function createccards(){
			var start = document.getElementById("startteam");
			for (var i=0; i<team.length; i++){
					var card = createElement("div",null,"class","col-md-4 col-sm-6 teamcard");
	                var carddiv = createElement("div",null,"class","imgdiv");
					var cardimg = createElement("img",null,"src",team[i].imgpath);
					cardimg.setAttribute("class","cardimage");
					carddiv.appendChild(cardimg);
	                card.appendChild(carddiv);
					card.appendChild(createElement("hr",null,null,null));
					card.appendChild(createElement("h3",team[i].name,"class","cardname"));
					card.appendChild(createElement("p",team[i].position,"class","cardposition"));
					var cardbutton = createElement("p",null,"style","text-align:center;");
					var cardbut = createElement("input","Read more about","class","btn btn-default");
					cardbut.setAttribute("role","button");
					cardbut.setAttribute("value","Read About " + team[i].id);
					cardbut.setAttribute("onclick","on(this)");
					cardbutton.appendChild(cardbut);
					card.appendChild(cardbutton);
					start.appendChild(card);
			}
		}

		function createoverlays(){
			var start= document.getElementById("team");
			for (var i=0; i<team.length; i++){
					var over = createElement("div",null,"id",team[i].id);
					over.setAttribute("onclick","off(this)");
					over.setAttribute("value",team[i].id);
					var overlay = createElement("div",null,"class","text");
					var overlayimg = createElement("img",null,"class","overlayimg");
					overlayimg.setAttribute("src",team[i].imgpath);
					var overlaydesc = createElement("div",null,"class","overlaydesc");
					overlaydesc.appendChild(createElement("h1",team[i].name,null,null));
					overlaydesc.appendChild(createElement("p",team[i].position,"style","font-size:15px;"));
					overlaydesc.appendChild(createElement("p",team[i].description,"style","font-size:15px;"));
					overlay.appendChild(overlayimg);
					overlay.appendChild(overlaydesc);
					over.appendChild(overlay);
					start.appendChild(over);
			}

		}

		function createElement( tagname, text, attribute, attributeval ){
			var ele = document.createElement( tagname);
			if (text != null ){ ele.appendChild(document.createTextNode(text));}
			if (attribute != null) { ele.setAttribute(attribute, attributeval);}
			return ele;
		}
	///////////////////////////
	// Scrollspy
	$('body').scrollspy({
		target: '#nav',
		offset: $(window).height() / 2
	});

	///////////////////////////
	// Smooth scroll
	$("#nav .main-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$(".home-wrapper .home-content a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 600);
	});

	$('#back-to-top').on('click', function(){
		$('body,html').animate({
			scrollTop: 0
		}, 600);
	});

	///////////////////////////
	// Btn nav collapse
	$('#nav .nav-collapse').on('click', function() {
		$('#nav').toggleClass('open');
	});

	///////////////////////////
	// Mobile dropdown
	$('.has-dropdown a').on('click', function() {
		$(this).parent().toggleClass('open-drop');
	});

	///////////////////////////
	// On Scroll
	$(window).on('scroll', function() {
		var wScroll = $(this).scrollTop();

		// Fixed nav
		wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

		// Back To Top Appear
		wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
	});

	///////////////////////////
	// magnificPopup
	$('.work').magnificPopup({
		delegate: '.lightbox',
		type: 'image'
	});

	///////////////////////////
	// Owl Carousel
	$('#about-slider').owlCarousel({
		items:1,
		loop:true,
		margin:15,
		nav: true,
		navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		dots : true,
		autoplay : true,
		animateOut: 'fadeOut'
	});

	$('#testimonial-slider').owlCarousel({
		loop:true,
		margin:15,
		dots : true,
		nav: false,
		autoplay : true,
		responsive:{
			0: {
				items:1
			},
			992:{
				items:2
			}
		}
	});

})(jQuery);
