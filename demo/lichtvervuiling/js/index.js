function toBottom()
{
		window.scrollTo(0, document.body.scrollHeight);
}
document.onload = toBottom();


window.onload = function() {
		var controller = new ScrollMagic.Controller({loglevel:0, addIndicators: true});

		var afb1 = $('.een');
		var afb2 = $('.twee');
		var afb3 = $('.drie');
		var afb4 = $('.vier');
		var afb5 = $('.vijf'); 
		var afb6 = $('.zes');

		var tl0 = new TimelineMax({repeat:0});
		var tl1 = new TimelineMax({repeat:0});
		var tl2 = new TimelineMax({repeat:0});
		var tl3 = new TimelineMax({repeat:0});
		var tl4 = new TimelineMax({repeat:0});
		var tl5 = new TimelineMax({repeat:0});

		tl0 .to(afb1, 1, {y:-50, scale: .9, opacity:0})
		tl1 .to(afb2, 1, {y:-50, scale: .9, opacity:0})
		tl2 .to(afb3, 1, {y:-50, scale: .9, opacity:0})
		tl3 .to(afb4, 1, {y:-50, scale: .9, opacity:0})
		tl4 .to(afb5, 1, {y:-50, scale: .9, opacity:0})
		tl5 .to(afb6, 1, {y:-50, scale: .9, opacity:0})

		var scene0 = new ScrollMagic.Scene({triggerHook:"onLeave", triggerElement:"#c1", duration: 500})
				.setTween(tl0)
				.addTo(controller);

		var scene1 = new ScrollMagic.Scene({triggerHook:"onLeave", triggerElement:"#c2", duration: 500})
				.setTween(tl1)
				.addTo(controller);

		var scene2 = new ScrollMagic.Scene({triggerHook:"onLeave", triggerElement:"#c3", duration: 500})
				.setTween(tl2)
				.addTo(controller);

		var scene3 = new ScrollMagic.Scene({triggerHook:"onEnter", triggerElement:"#c3", duration: 500})
				.setTween(tl3)
				.addTo(controller);

		var scene4 = new ScrollMagic.Scene({triggerHook:"onEnter", triggerElement:"#c4", duration: 500})
				.setTween(tl4)
				.addTo(controller);

		var scene5 = new ScrollMagic.Scene({triggerHook:"onEnter", triggerElement:"#c5", duration: 500})
				.setTween(tl5)
				.addTo(controller);


function $ (el) {
	return document.querySelector(el);
}

};



document.documentElement.addEventListener('keydown', function (e) {
    if ( ( e.keycode || e.which ) == 32) {
        e.preventDefault();
    //    pJSDom[0].pJS.particles.move.enable = true;

	//	reload_js('js/particles.js');
	    
	 //   console.log(pJSDom[0].pJS.particles.move.enable);
    }
}, false);

;(function () {

	kd.SPACE.down(function () {
		// Font size vergroten
		spn1 = document.getElementById('first');
		txt1 = document.getElementById('p1');
		txt2 = document.getElementById('p2');
		txt3 = document.getElementById('p3');
		txt4 = document.getElementById('p4');
		txt5 = document.getElementById('p5');
		txt6 = document.getElementById('p6');
		btn = document.getElementById('linkButton');

    	styleFont1 = window.getComputedStyle(txt1, null).getPropertyValue('font-size');
    	styleFont2 = window.getComputedStyle(txt2, null).getPropertyValue('font-size');
    	styleFont3 = window.getComputedStyle(txt3, null).getPropertyValue('font-size');
    	styleFont4 = window.getComputedStyle(txt4, null).getPropertyValue('font-size');
    	styleFont5 = window.getComputedStyle(txt5, null).getPropertyValue('font-size');
    	styleFont6 = window.getComputedStyle(txt6, null).getPropertyValue('font-size');

    	styleOpacityFirst = window.getComputedStyle(first, null).getPropertyValue('opacity');
    	styleOpacity1 = window.getComputedStyle(txt1, null).getPropertyValue('opacity');
    	styleOpacity2 = window.getComputedStyle(txt2, null).getPropertyValue('opacity');
    	styleOpacity3 = window.getComputedStyle(txt3, null).getPropertyValue('opacity');
    	styleOpacity4 = window.getComputedStyle(txt4, null).getPropertyValue('opacity');
    	styleOpacity5 = window.getComputedStyle(txt5, null).getPropertyValue('opacity');
    	styleOpacity6 = window.getComputedStyle(txt6, null).getPropertyValue('opacity');
    	styleOpacityBtn = window.getComputedStyle(btn, null).getPropertyValue('opacity');

    	currentSize1 = parseFloat(styleFont1);
    	currentSize2 = parseFloat(styleFont2);
    	currentSize3 = parseFloat(styleFont3);
    	currentSize4 = parseFloat(styleFont4);
    	currentSize5 = parseFloat(styleFont5);
    	currentSize6 = parseFloat(styleFont6);

    	currentOpacityFirst = parseFloat(styleOpacityFirst);
    	currentOpacity1 = parseFloat(styleOpacity1);
    	currentOpacity2 = parseFloat(styleOpacity2);
    	currentOpacity3 = parseFloat(styleOpacity3);
    	currentOpacity4 = parseFloat(styleOpacity4);
    	currentOpacity5 = parseFloat(styleOpacity5);
    	currentOpacity6 = parseFloat(styleOpacity6);
    	currentOpacityBtn = parseFloat(styleOpacityBtn);

    	if (currentSize1 <= 18) {
    		first.style.opacity = (currentOpacityFirst - 0.05);

    		txt1.style.fontSize = (currentSize1 + .1) + 'px';
    		txt1.style.opacity = (currentOpacity1 + 0.055);
    	} 
    	
    	else if (currentSize1 >= 18 && currentSize2 <= 18){
    		txt1.style.fontSize = (currentSize1 + .1) + 'px';
    		txt1.style.opacity = (currentOpacity1 - 0.01);

    		txt2.style.fontSize = (currentSize2 + .1) + 'px';
    		txt2.style.opacity = (currentOpacity2 + 0.055);
    	} 
    	
    	else if (currentSize2 >= 18 && currentSize3 <= 18){
    		txt1.style.fontSize = (currentSize1 + .1) + 'px';
    		txt1.style.opacity = (currentOpacity1 - 0.01);

    		txt2.style.fontSize = (currentSize2 + .1) + 'px';
    		txt2.style.opacity = (currentOpacity2 - 0.01);

    		txt3.style.fontSize = (currentSize3 + .1) + 'px';
    		txt3.style.opacity = (currentOpacity3 + 0.055);
    	}

    	else if (currentSize3 >= 18 && currentSize4 <= 18){
    		txt1.style.fontSize = (currentSize1 + .1) + 'px';
    		txt1.style.opacity = (currentOpacity1 - 0.01);

    		txt2.style.fontSize = (currentSize2 + .1) + 'px';
    		txt2.style.opacity = (currentOpacity2 - 0.01);

    		txt3.style.fontSize = (currentSize3 + .1) + 'px';
    		txt3.style.opacity = (currentOpacity3 - 0.01);

    		txt4.style.fontSize = (currentSize4 + .1) + 'px';
    		txt4.style.opacity = (currentOpacity4 + 0.055);
    	}
		
		else if (currentSize4 >= 18 && currentSize5 <= 18){
    		txt1.style.fontSize = (currentSize1 + .1) + 'px';
    		txt1.style.opacity = (currentOpacity1 - 0.01);

    		txt2.style.fontSize = (currentSize2 + .1) + 'px';
    		txt2.style.opacity = (currentOpacity2 - 0.01);

    		txt3.style.fontSize = (currentSize3 + .1) + 'px';
    		txt3.style.opacity = (currentOpacity3 - 0.01);

    		txt4.style.fontSize = (currentSize4 + .1) + 'px';
    		txt4.style.opacity = (currentOpacity4 - 0.01);

    		txt5.style.fontSize = (currentSize5 + .1) + 'px';
    		txt5.style.opacity = (currentOpacity5 + 0.055);
    	}

    	else if (currentSize5 >= 18 && currentSize6 <= 22){
    		txt1.style.fontSize = (currentSize1 + .1) + 'px';
    		txt1.style.opacity = (currentOpacity1 - 0.01);

    		txt2.style.fontSize = (currentSize2 + .1) + 'px';
    		txt2.style.opacity = (currentOpacity2 - 0.01);

    		txt3.style.fontSize = (currentSize3 + .1) + 'px';
    		txt3.style.opacity = (currentOpacity3 - 0.01);

    		txt4.style.fontSize = (currentSize4 + .1) + 'px';
    		txt4.style.opacity = (currentOpacity4 - 0.01);

    		txt5.style.fontSize = (currentSize5 + .1) + 'px';
    		txt5.style.opacity = (currentOpacity5 - 0.01);

    		txt6.style.fontSize = (currentSize6 + .1) + 'px';
    		txt6.style.opacity = (currentOpacity6 + 0.055);
    	}

    	else if (currentSize6 >= 22){
    		txt1.style.fontSize = (currentSize1 + .1) + 'px';
    		txt1.style.opacity = (currentOpacity1 - 0.01);

    		txt2.style.fontSize = (currentSize2 + .1) + 'px';
    		txt2.style.opacity = (currentOpacity2 - 0.01);

    		txt3.style.fontSize = (currentSize3 + .1) + 'px';
    		txt3.style.opacity = (currentOpacity3 - 0.01);

    		txt4.style.fontSize = (currentSize4 + .1) + 'px';
    		txt4.style.opacity = (currentOpacity4 - 0.01);

    		txt5.style.fontSize = (currentSize5 + .1) + 'px';
    		txt5.style.opacity = (currentOpacity5 - 0.01);

    		btn.style.opacity = (currentOpacityBtn + 0.08);
    	}    

	});

	kd.SPACE.up(function () {
//        pJSDom[0].pJS.particles.move.enable = false;

//		reload_js('js/particles.js');

//        console.log(pJSDom[0].pJS.particles.move.enable);
	});

	kd.run(function () {
		kd.tick();
	});
} ());








