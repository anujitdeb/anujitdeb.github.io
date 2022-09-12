$(function () {
	$(".typed").typed({
		strings: ["Computers",  "developing","Assassin's Creed"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 0,
		// time before backspacing
		backDelay: 1500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 50,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "_",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function () { },
		// starting callback function before each string
		preStringTyped: function () { },
		//callback for every typed string
		onStringTyped: function () { },
		// callback for reset
		resetCallback: function () { }
	});
});