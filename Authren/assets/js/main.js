/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		alignment: 'center'
	});

	// Nav.

	// Title Bar.
	$(
		'<div id="titleBar">' +
		'<a href="#navPanel" class="toggle"></a>' +
		'</div>'
	)
		.appendTo($body);

	// Panel.
	$(
		'<div id="navPanel">' +
		'<nav>' +
		$('#nav').navList() +
		'</nav>' +
		'</div>'
	)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});



	// Generator
	var $textField = $("#gentxtfield");
	var $gensepcount = $("#gensepcount");
	var $geninstrcheckbox = $("#geninstrcheckbox");
	var $genpromptcount = $("#geninstrcheckbox");
	var $prompt1 = $("#prompt1");
	$("#genbtn").click(function () {
		var outputStr = "";

		//instructions
		if ($($geninstrcheckbox).is(':checked')) {
			outputStr +=textGen.fillInstructions();
		}

		outputStr += textGen.fill();
		var firstStatement = $prompt1.val()+ "\n";
		var statementLength = firstStatement.length;
		var statementData = {
			statement: firstStatement,
			length: statementLength
		}
		//outputStr += textGen.fillWithTextInbetween.call(statementData);
		outputStr += firstStatement;
		outputStr += textGen.fill();
		$textField.val(outputStr);

	});

	$("#genpromptcount").change(function () {

		var divvv = $("#genpromptdiv");
		divvv.html = "aaaaaaaaaaaaa";
	});
	const textGen = {
		fill() {
			var output = ""
			for (i = 0; i < $gensepcount.val(); i++) {
				output += "=";
			}
			output += "\n"
			return output;
		},
		fillWithTextInbetween() {
			var output = "";
			var leftRightFill = this.length / 2;
			for (i = 0; i < leftRightFill; i++) {
				output += "=";
			}

			output += this.statement;

			for (i = 0; i < leftRightFill; i++) {
				output += "=";
			}
			output += "\n"
			return output
		},
		
		fillInstructions(){
			var output="";
			output+="blablablabla instructions here\n"
			+		"more instructions \n"
			+		this.fill()
			+		"some fill here: \n"
			+    	this.fill()
			+		"some fill there ^\n";

			return output
		}
	}
})(jQuery);