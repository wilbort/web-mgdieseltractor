// Videotutorial: http://codepen.io/escueladigital/pen/OyLYrW
$(window).on('scroll',parallax);

function parallax(){
  //obtener el nivel de scroll
  var s = $(window).scrollTop();
  // efecto parallax para los fondos
  function parallaxBg(el,t){
    $(el).css({
      'background-attachment': 'fixed',
      'background-position': 'center ' + -(s*t) + 'px' 
    })
  }

  function parallaxBg2(el,t){
    $(el).css({
      'background-attachment': 'fixed',
      'background-position': '50% ' + -((s*t)- 480 )+ 'px' 
    })
  } 

  function parallaxBg3(el,t){
    $(el).css({
      'background-attachment': 'fixed',
      'background-position': '50% ' + -((s*t)- 840 )+ 'px' 
    })
  }

  function parallaxBg4(el,t){
    $(el).css({
      'background-attachment': 'fixed',
      'background-position': '50% ' + -((s*t)- 400 )+ 'px' 
    })
  }

  parallaxBg('.home',.2);
  parallaxBg('.seccion-slogan',.08);
  parallaxBg2('.banner1',.6);
  parallaxBg3('.banner2',.6);
  parallaxBg4('.banner3',.6);


  //parallaxFront('.txt-welcome',0);

}

// $(document).ready(function(){
 
//   $(window).scroll(function(){
//     var barra = $(window).scrollTop();
//     var posicion =  (barra * 0.1);
    
//     $('.banner1').css({
//       'background-position': '0 -' + posicion + 'px'
//     });
 
//   });
 
// });