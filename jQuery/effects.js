$(() => {

  //fading
  // $('button').on('click', function(){
  //   $('div').fadeToggle(500, function(){
  //     //replace with fadeout coupled with this.remove and fadeIn and other code
  //     // console.log('Fade completed!');
  //     // $(this).remove();
  //   });
  // });

  //sliding with display - slideUp, slideDown, slideToggle with duration and callback function.
  $('button').on('click', function(){
    $('div').slideToggle(1000, function(){
      // console.log('toggled!');
      // $(this).remove();
    });
  });

});
