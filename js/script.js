$(document).ready(function() {
	var HeartsBackground = {
	  heartHeight: 60,
	  heartWidth: 64,
	  hearts: [],
	  heartImage: 'img/heart.png',
	  maxHearts: 8,
	  minScale: 0.4,
	  draw: function() {
	    this.setCanvasSize();
	    this.ctx.clearRect(0, 0, this.w, this.h);
	    for (var i = 0; i < this.hearts.length; i++) {
	      var heart = this.hearts[i];
	      heart.image = new Image();
	      heart.image.style.height = heart.height;
	      heart.image.src = this.heartImage;
	      this.ctx.globalAlpha = heart.opacity;
	      this.ctx.drawImage (heart.image, heart.x, heart.y, heart.width, heart.height);
	    }
	    this.move();
	  },
	  move: function() {
	    for(var b = 0; b < this.hearts.length; b++) {
	      var heart = this.hearts[b];
	      heart.y += heart.ys;
	      if(heart.y > this.h) {
	        heart.x = Math.random() * this.w;
	        heart.y = -1 * this.heartHeight;
	      }
	    }
	  },
	  setCanvasSize: function() {
	    this.canvas.width = window.innerWidth;
	    this.canvas.height = window.innerHeight;
	    this.w = this.canvas.width;
	    this.h = this.canvas.height;
	  },
	  initialize: function() {
	    this.canvas = document.getElementById("can1");

	    if(!this.canvas.getContext)
	      return;

	    this.setCanvasSize();
	    this.ctx = this.canvas.getContext('2d');

	    for(var a = 0; a < this.maxHearts; a++) {
	      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
	      this.hearts.push({
	        x: Math.random() * this.w,
	        y: Math.random() * this.h,
	        ys: Math.random() + 1,
	        height: scale * this.heartHeight,
	        width: scale * this.heartWidth,
	        opacity: scale
	      });
	    }

	    setInterval($.proxy(this.draw, this), 30);
	  }
	};
	HeartsBackground.initialize();

	var windowHalfX = window.innerWidth / 2;
	var windowHalfY = window.innerHeight / 2;
	var curr = 1, next = 2;	
	var bgTime = 0.5;
	
    var a = $(".logo-main").toArray().slice(1,5);
    $(a).addClass("gear"); 

    $('#fullpage').fullpage({
    	scrollOverflowOptions: {
	         click: true
	    },
	    scrollOverflow: true,
		scrollDelay: 1000,
		'navigation': true,
		'navigationPosition': 'right',
		'navigationColor' : '#fff',
		'navigationTooltips': ['ONCE UPON A TIME', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
		anchors: ['intro', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
		onLeave: function(index, nextIndex, direction){
			console.log(index, nextIndex);
			/*startRotation();*/
			curr = index;
			next = nextIndex;
			diff = next-curr;
			var l1, l2, l3;
			switch(next){
				case 1 : 
					tlItems.tweenFromTo("start", "enter12");
					tl.tweenTo("enter1").duration(1);	
					break;
				case 2 : 
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter21");
					l3 = tlItems.getLabelTime("enter22");	
					
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter2").duration(1);	
					break;
				case 3 : 
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter31");
					l3 = tlItems.getLabelTime("enter36");	
					
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter3").duration(1);	
					break;
				case 4 :
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter41");
					l3 = tlItems.getLabelTime("enter43");	
					
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter4").duration(1);	
					break;
				case 5 : 
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter51");
					
					l3 = tlItems.getLabelTime("enter52");	
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter5").duration(1);	
					break;
				case 6 : 
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter61");
					l3 = tlItems.getLabelTime("enter63");	
					
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter6").duration(1);	
					break;
				case 7 : 
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter71");
					l3 = tlItems.getLabelTime("enter74");	
					
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter7").duration(1);	
					break;
				case 8 : 
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter81");
					l3 = tlItems.getLabelTime("enter82");	
					
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter8").duration(1);	
					break;
				case 9 : 
					l1 = tlItems.time();
					l2 = tlItems.getLabelTime("enter91");
					l3 = tlItems.getLabelTime("enter93");	
					
					TweenMax.fromTo(tlItems, 1, {time:l1}, {time:l2, onComplete:playSlide}) 
					function playSlide(){
						TweenMax.fromTo(tlItems, (l3-l2), {time:l2}, {time:l3})
					}
					tl.tweenTo("enter9").duration(1);	
					break;					
			}
		}
	})
	var max = 0.5, min = 0.2;
	var appTime = Math.random()*(max-min+1)+min;
	TweenMax.staggerFromTo($(".img-rim").slice(1, $(".img-rim").toArray().length -1), appTime, 
    {boxShadow: "0px 0px 20px 5px white, inset 0px 0px 10px 2px white"},
    {boxShadow: "0px 0px 30px 15px white, inset 0px 0px 15px 5px white", repeat:-1, yoyo:true}, 0.2);    
    
    var hearTL = new TimelineMax({repeat:-1, repeatDelay:-1});
    hearTL
    .add("start")
    .staggerTo(".h-right", appTime*3+1, {bezier:{type:"cubic", values:[{x:0, y:0}, {x:100, y:-200}, {x:200, y:0}, {x:300, y:-200}]}, height:64, width:70,  ease:Power1.easeInOut,
    	onStart:fadeOut
    }, appTime, "start")
	.staggerTo(".h-left", appTime*3+1, {bezier:{type:"cubic", values:[{x:0, y:0}, {x:-100, y:-200}, {x:-200, y:0}, {x:-300, y:-200}]}, delay:1, height:64, width:70,  ease:Power1.easeInOut, 
		onStart:fadeOut
	}, appTime*1.1, "start")

    function fadeOut(){
    	TweenMax.to(this.target, appTime*1.5+0.5, {opacity:1})
    	TweenMax.to(this.target, appTime*1.5+0.5, {delay:appTime*1.5+0.5, opacity:0})
    }  

	var rotTL = new TimelineMax({repeat:-1, yoyo:true});
	rotTL
	.add("start")
	.to($(".slide2 .logo-main, .gear, .logo-black, .logo-main-copy"), 20, {
    	rotationZ:360, 
    	ease:Linear.easeNone,    	
    	repeat:-1
    }, "start");
    rotTL.pause();

    var altTL = new TimelineMax({repeat:-1, yoyo:true});
    altTL
    .add("start")
    .to([ $(".logo-rot")[0], $(".logo-rot")[2] ], 2, {
    	rotationZ:120, 
    	repeat:-1, 
    	yoyo:true, 
    	ease:Back.easeOut
    }, "start")
    .to([ $(".logo-rot")[1], $(".logo-rot")[3] ], 2, {
    	rotationZ:-180, 
    	repeat:-1, 
    	yoyo:true, 
    	ease:Back.easeOut
    }, "start");

    function startRotation(){
		stopRotation();
		rotTL.timeScale(1).play();
    }

    function stopRotation(){
		rotTL.stop();
    }
    function fastRotation(){
		rotTL.timeScale(5).play();
    }
    function slowRotation(){
		var time = rotTL.time()+5;
    	TweenMax.to(rotTL, 3, {time:time, ease:Power2.easeOut, onComplete:stopRotation});    	
    }
    /*function stopRotation(){
    	var time = rotTL.time()+1;
    	TweenMax.to(rotTL, 2, {time:time, ease:Power2.easeOut, onComplete:pauseTl});
    	function pauseTl(){
    		rotTL.pause();
    	}
    }*/
    /*startRotation();*/
    var amt = -76;
	var tl = new TimelineMax();
	tl
	.to([".demo-items", $("body")], bgTime, {backgroundColor:"rgba(185, 0, 76, 1)"}, "enter1")
	.to(".move-dig", 1, {top:0, ease: Linear.easeNone}, "enter1")
	.add("enter1")
	.to(".year", bgTime, {opacity:1}, "enter2")	
	.to([".demo-items", $("body")], bgTime, {backgroundColor:"rgba(255, 192, 0, 1)"}, "enter2")
	.add("enter2")
	.to(".move-dig", 1, {top: amt, ease: Linear.easeNone}, "enter3")
	.to([".demo-items", $("body")], bgTime, {backgroundColor:"rgba(160, 207, 7, 1)"}, "enter3")
	.add("enter3")
	.to(".move-dig", 1, {top: amt * 2, ease: Linear.easeNone}, "enter4")
	.to([".demo-items", $("body")], bgTime, {backgroundColor:"rgba(1, 47, 81, 1)"}, "enter4")
	.add("enter4")
	.to(".move-dig", 1, {top: amt * 3, ease: Linear.easeNone}, "enter5")
	.to([".demo-items", $("body")] , bgTime, {backgroundColor:"rgba(3, 204, 247, 1)"}, "enter5")
	.add("enter5")
	.to(".move-dig", 1, {top: amt * 4, ease: Linear.easeNone}, "enter6")
	.to([".demo-items", $("body")] , bgTime, {backgroundColor:"rgba(252, 124, 33, 1)"}, "enter6")
	.add("enter6")
	.to(".move-dig", 1, {top: amt * 5, ease: Linear.easeNone}, "enter7")
	.to([".demo-items", $("body")] , bgTime, {backgroundColor:"rgba(251, 64, 59, 1)"}, "enter7")
	.add("enter7")
	.to(".move-dig", 1, {top: amt * 6, ease: Linear.easeNone}, "enter8")
	.to([".demo-items", $("body")] , bgTime, {backgroundColor:"rgba(255, 62, 113, 1)"}, "enter8")
	.add("enter8")
	.to(".move-dig", 1, {top: amt * 7, ease: Linear.easeNone}, "enter9")
	.to([".demo-items", $("body")] , bgTime, {backgroundColor:"rgba(185, 0, 76, 1)"}, "enter9")	/*
	.to(".year", 0.1, {opacity:0}, "enter9")*/
	.add("enter9")	
	;
	tl.seek(0).tweenTo("enter1");


	var tlItems = new TimelineMax();
	tlItems
	.to($(".slide2 .logo-main"), 0.2, { opacity:0.2 }, "start")
	.add("start")
	.add(startRotation, "start")
	.staggerFromTo($(".slide1 .an-cnt"), bgTime*0.5, {
     	x:20
    },{
     	x:"+=30",
    }, 0.1, "enter11")
    .staggerFromTo($(".slide1 .an-cnt-bg"), bgTime*0.5, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter11")	
	.add("enter11") 
    .to($(".slide1 .an-cnt-in"), bgTime*0.5, {
		opacity:1 
    }, "enter12")
    .staggerTo($(".slide1 .an-cnt-bg"), bgTime, {
		x:"105%"
    }, 0.1, "enter12")
	.to($(".slide1 .bottom-bar"), 0.5, {delay:1, opacity:0.8}, "enter12")    
    .add("enter12")
    .staggerFromTo($(".slide1 .an-cnt"), bgTime*0.5, {
     	opacity:1
    },{
     	opacity:0
    }, 0.3, "exit1")
    .to($(".slide1 .bottom-bar"), 0.5, {opacity:0}, "exit1")	
	.to(["#can1", ".letter-wt"], 1, {opacity:0}, "exit1")    
    .add(startRotation, "exit1")
    .add("exit1")
    .to($(".slide2 .logo-main"), 1, { opacity:1 }, "enter21")
    .staggerFromTo($(".slide2 .an-cnt"), bgTime*1, {
     	x:0
    },{
     	x:"+=30",
    }, 0.1, "enter21")
    .staggerFromTo($(".slide2 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter21")	
    .add("enter21")
    .to($(".slide2 .an-cnt-in"), bgTime*1, {
		opacity:1 
    }, "enter22")
    .staggerTo($(".slide2 .an-cnt-bg"), bgTime, {
		x:"105%"
    }, 0.1, "enter22")    
    .add("enter22")    
	.staggerFromTo($(".slide2 .an-cnt").toArray().reverse(), bgTime*1.5, {
     	opacity:1
    },{
     	opacity:0
    }, 0.3, "exit2")   
    .add("exit2")           
    /*.to($(".slide2 .c-3 .logo-main"), 0.1, { opacity:0}, "enter31")*/
    .to($(".slide2 .c-3 .logo-main-copy"), 0.1, { opacity:1}, "enter31") 
	.staggerFromTo($(".slide3 .an-cnt"), bgTime*1, {
     	x:10
    },{
     	x:"+=20",
    }, 0.1, "enter31")
    .staggerFromTo($(".slide3 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter31")            
	.add("enter31")
	.add(startRotation, "enter31")
    .to($(".slide3 .an-cnt-in"), bgTime*1, {
		opacity:1 
    }, "enter32")
    .staggerTo($(".slide3 .an-cnt-bg"), bgTime, {
		x:"105%"
    }, 0.1, "enter32")
    .add("enter32")	
    .to($(".slide3 .img-flower .img-dot"), 0.1, {
    	scale:0.25,
    	top: "24%",
		left: "24%"
    }, "enter33")
    .to($(".img-dot")[4], 0.1, {top:"24%", left:"23%"}, "enter33")
    .to($(".img-dot")[3], 0.1, {top:"28%", left:"28%", width:50, height:50 }, "enter33")
    .to($(".img-dot")[2], 0.1, {top:"25%", left:"25%"}, "enter33")
    .to($(".slide3 .img-flower"), 0.1, { margin: 5}, "enter33")
    .add("enter33")
    .to($(".slide3 .c-3 .img-dot"), 0.5, { height:35, width:35, ease:Back.easeOut}, "enter34") 
    .to($(".slide2 .c-3 .img-contain, .slide3 .c-3 .img-contain"), 2, { height:180, width:180, x:"-=150", y:"+=100", ease:Back.easeInOut}, "enter34")    
    .add("enter34")
    .staggerTo($(".slide3 .img-flower .logo-main"), 1, {
    	opacity:1,
    	scale:0.7,
    	ease: Power2.EaseOut
    }, 0.4, "enter35")
    .staggerTo($(".slide3 .img-dot"), 1, {
    	opacity:1
    }, 0.5, "enter35")
    .add("enter35")
    .to($(".petal.p1"), 5, {top:-50, left:-50, opacity:1, ease:Back.easeOut}, "enter36")
    .to($(".petal.p2"), 5, {delay:0.05, top:-50, right:-50, opacity:1, ease:Back.easeOut}, "enter36")
    .add("enter36")
	.staggerFromTo($(".slide3 .an-cnt").toArray().reverse(), bgTime*1, {
     	opacity:1
    },{
     	opacity:0
    }, 0.3, "exit3")	
	.add("exit3")
	.staggerFromTo($(".slide4 .an-cnt"), bgTime*1, {
     	x:10
    },{
     	x:"+=20",
    }, 0.1, "enter41")
    .staggerFromTo($(".slide4 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter41")	
	.add("enter41")
	.add(stopRotation, "enter41")
    .to($(".slide4 .an-cnt-in"), bgTime*1, {
		opacity:1 
    }, "enter42")
    .staggerTo($(".slide4 .an-cnt-bg"), bgTime, {
		x:"105%"
    }, 0.1, "enter42")
    .staggerTo(".img-dot", 1, {opacity:0}, 0.2, "enter42")
	.to(".petal", 1, {
		opacity:0
	}, "enter42")	
    .add("enter42")    
    .to($(".img-rim"), 0.1, {
    	top: "5%",
	    left: "35%",
	    height: "30%",
	    width: "30%",
	    border:"0px solid transparent"
    }, "enter43")
    .to([$(".logo-main")], 2, {
    	height:"40%", 
    	width:"40%",
    	ease:Power2.easeOut
    }, "enter43")
    .to($(".slide2 .logo-main"), 0.1, {opacity:0}, "enter43-=0.1")
    .to($(".slide3 .c-3 .logo-main"), 0.1, {opacity:1}, "enter43-=0.1")
    .to($(".img-rim"), 1, {opacity:0.2}, "enter43+=2")
    .to($(".logo-main").slice(1, $(".logo-main").toArray().length -1), 1, {opacity:1}, "enter43+=2")
    .to([$(".img-contain")[1], $(".img-contain")[3], $(".img-contain")[5], $(".img-contain")[7], $(".img-contain")[9]], 3, {top:"-=80"}, "enter43")    
    .to([$(".img-contain")[6], $(".img-contain")[8], $(".img-contain")[10], $(".img-contain")[11]], 5, {top:"-=60"}, "enter43")    
    .to([$(".img-contain")[2], $(".img-contain")[4], $(".img-contain")[9], $(".img-contain")[12]], 4, {top:"-=50"}, "enter43")    
    .add("enter43")
	.staggerFromTo($(".slide4 .an-cnt").toArray().reverse(), bgTime*1, {
     	opacity:1
    },{
     	opacity:0,
     	onComplete:startRotation
    }, 0.3, "exit4")
    .add("exit4")
   .staggerFromTo($(".slide5 .an-cnt"), bgTime*1, {
     	x:10
    },{
     	x:"+=20",
    }, 0.1, "enter51")
    .staggerFromTo($(".slide5 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter51")
    .to($(".img-rim"), 1, {opacity:0.7}, "enter51")
	.add("enter51")
    .to($(".slide5 .an-cnt-in"), bgTime*1, {
		opacity:1 
    }, "enter52")
    .staggerTo($(".slide5 .an-cnt-bg"), bgTime, {
		x:"105%",
		onComplete:stopRotation
    }, 0.1, "enter52")
    .to($(".logo-main"), 3, {height:"60%", width:"60%"}, "enter52")
    .to($(".img-rim"), 3, {height:"40%", width:"40%", left:"30%", top:"10%"}, "enter52")
    .to($(".img-contain"), 3, {y:"-=20"}, "enter52")
    .add("enter52")
    .staggerFromTo($(".slide5 .an-cnt").toArray().reverse(), bgTime*1, {
     	opacity:1
    },{
     	opacity:0
    }, 0.3, "exit5")
	.to(".img-rim", 0.5, {opacity:0}, "exit5")	
    .to($(".logo-main").not(".gear"), 1, {opacity:0}, "exit5")
    .add("exit5")
	.staggerFromTo($(".slide6 .an-cnt"), bgTime*1, {
     	x:10
    },{
     	x:"+=20",
    }, 0.1, "enter61")
    .staggerFromTo($(".slide6 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter61")	    
    .add("enter61")
    .to($(".slide6 .an-cnt-in"), bgTime, {
		opacity:1 
    }, "enter62")
    .staggerTo($(".slide6 .an-cnt-bg"), bgTime, {
		x:"105%"
    }, 0.1, "enter62")
    .to($(".gear"), 2, {
    	height:"100%",
    	width:"100%"
    }, "enter62")
    .to($($(".gear")[0]).parent(), 2, {    	
	    left: -23
    }, "enter62")
    .to($($(".gear")[1]).parent(), 2, {
    	height: 260,
	    width: 260,
	    margin: 0,
	    top:-100,
	    left: -25
    }, "enter62")
    .to($(".gear")[2], 2, {    	
	    scale:1
	}, "enter62")
    .to($($(".gear")[2]).parent(), 2, {
    	height: 140,
	    width: 140,
	    margin: 0,
	    left: -85,
	    top:  -100
    }, "enter62")
    .to($($(".gear")[3]).parent(), 2, {
    	height: 140,
	    width: 140,
	    margin: 0,
	    left: -125,
	    top:  -50
    }, "enter62")
    .add("enter62")
    .to($(".gear"), 1, {opacity:0}, "enter63")
    .to($(".logo-rot"), 0.5, {opacity:1}, "enter63")
    .add("enter63")
    .staggerFromTo($(".slide6 .an-cnt").toArray().reverse(), bgTime*1, {
     	opacity:1
    },{
     	opacity:0
    }, 0.3, "exit6")
    .add("exit6")
    .staggerFromTo($(".slide7 .an-cnt"), bgTime*1, {
     	x:10
    },{
     	x:"+=20",
    }, 0.1, "enter71")
    .staggerFromTo($(".slide7 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter71")	
    .add("enter71")
    .to([$(".logo-rot")[2], $(".logo-rot")[3]], 1, {opacity:0}, "enter72")
    .to($($(".gear")[0]).parent(), 4, {
    	bezier:{type:"thru", values:[{x:-150, y:100}, {x:-170, y:200}, {x:-110, y:250}, {x:110, y:270}, {x:150, y:150},/* {x:55, y:150}*/]},
    	ease:Power2.easeOut
	}, "enter72")
    .to($($(".gear")[1]).parent(), 4, {
    	bezier:{type:"thru", values:[{x:0, y:0}, {x:100, y:-30}, {x:150, y:-100}, {x:100, y:-150}, {x:-150, y:-50}, {x:-120, y:-50}/*, {x:0, y:-50}*/]},
    	ease:Power2.easeOut
	}, "enter72")
     .to($(".slide7 .an-cnt-in"), bgTime, {
		opacity:1 
    }, "enter72")
    .staggerTo($(".slide7 .an-cnt-bg"), bgTime, {
		x:"105%"
    }, 0.1, "enter72")    
    .add("enter72")    
    .to($($(".gear")[0]).parent(), 2, {delay:1,x:"-=130", ease:Power2.easeOut}, "enter73") 
    .to($($(".gear")[1]).parent(), 2, {delay:1,x:"+=145", ease:Power2.easeOut}, "enter73") 
    .add("enter73")
    .to($($(".gear")[1]).parent(), 2, {opacity:0}, "enter74") 
    .add("enter74")
    .staggerFromTo($(".slide7 .an-cnt").toArray().reverse(), bgTime*1, {
     	opacity:1
    },{
     	opacity:0
    }, 0.3, "exit7")
    .add("exit7")
    .staggerFromTo($(".slide8 .an-cnt"), bgTime*1, {
     	x:10
    },{
     	x:"+=20",
    }, 0.1, "enter81")
    .staggerFromTo($(".slide8 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter81")	
    .to(".heart-bubbles-cnt", 2, {opacity:1}, "enter81") 
    .add("enter81")
    .to($(".slide8 .an-cnt-in"), bgTime, {
		opacity:1, 
		onComplete:fastRotation 
    }, "enter82")
    .to($(".logo-rot")[0], 2, {opacity:0}, "enter82")        
    .to($(".gear")[0], 1, {opacity:1}, "enter82")        
    .staggerTo($(".slide8 .an-cnt-bg"), bgTime, {
		x:"105%"
    }, 0.1, "enter82")
    .add("enter82")   
    .staggerFromTo($(".slide8 .an-cnt").toArray().reverse(), bgTime*1, {
     	opacity:1
    },{
     	opacity:0
    }, 0.3, "exit8")  
    .to($(".heart-bubbles-cnt"), 1, {opacity:0}, "exit8")
    .to([".letter-bl" ], 1, {opacity:1}, "exit8")	
    .add("exit8")
    .staggerFromTo($(".slide9 .an-cnt"), bgTime*1, {
     	x:10
    },{
     	x:"+=20",
    }, 0.1, "enter91")
    .staggerFromTo($(".slide9 .an-cnt-bg"), bgTime*1, {
     	width:0
    },{
     	width: "100%"
    }, 0.1, "enter91")    
    .add("enter91")
    .to($(".slide9 .an-cnt-in"), bgTime, {
		opacity:1 
    }, "enter92")
    .staggerTo($(".slide9 .an-cnt-bg"), bgTime, {
		x:"105%",
		onComplete:slowRotation
    }, 0.1, "enter92")  
    .add("enter92")
    .staggerTo(".hny-let", bgTime*2, {
    	opacity:1,
    }, 0.2, "enter93")
    /*.staggerTo(".hny-let", bgTime*2, {
    	top:"-=6",
    	repeat:-1,
    	yoyo:true
    }, 0.4, "enter93")*/
    .add("enter93")
    ;

	tlItems.seek("start").tweenTo("enter12");	
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );

	function onDocumentMouseMove(e){
		/*console.log(e);*/
		mouseX = ( event.clientX - windowHalfX ) / 2;
		mouseY = ( event.clientY - windowHalfY ) / 2;
		TweenMax.staggerTo(".hny-let", 0.5, {x:mouseX*-0.1, y:mouseY*-0.1}, 0.1);
	}
})