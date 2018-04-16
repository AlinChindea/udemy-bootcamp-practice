$(() => {
  //Events
  // $('h1').click(function(){
  //   alert('h1 clicked!');
  // });
  // $('button').click(function(){
  //   const text = $(this).text();
  //   console.log(`You clicked ${text}`);
  //   // $(this).css('background', 'pink');
  // });
  //
  // $('input[type="text"]').keypress(function(event) {
  //   // console.log(event);
  //   if(event.which === 13){
  //     console.log('you hit enter!');
  //   }
  //   // console.log('you pressed a key');
  // });
  $('h1').on('click', function(){
    $(this).css('color', 'purple');
  });

  $('input').on('keypress', function(){
    console.log('keypressed!');
  });

  $('button').on('mouseenter', function(){
    $(this).css('font-weight', '700');
  });
  $('button').on('mouseleave', function(){
    $(this).css('font-weight', '400');
  });

  //Methods
  // console.log($('h1').text());
  // console.log($('ul').html());
  // //replace ul content with the below
  // $('ul').html('<li>Regular Candies</li><li>Popsicles</>');
  // //the below would update both lis
  // // $('li').html('<a href="google.com">Click me to google</a>');
  // $('img').css('width', '200px');
  // //replace the first image
  // $('img:first-of-type').attr('src', 'http://www.countryfile.com/sites/default/files/uploads/2015/08/iStock_000010014197_Medium.jpg');
  // //replace the last image
  // $('img').last().attr('src', 'http://www.countryfile.com/sites/default/files/uploads/2015/08/iStock_000010014197_Medium.jpg');
  // //replace all images
  // // $('img').attr('src', 'url');
  // console.log($('input').val());
  // console.log($('select').val());
  // //adding and removing classes
  // $('h1').addClass('correct');
  // $('h1').removeClass('correct');
  // $('li').addClass('wrong');
  // $('li').removeClass('wrong').addClass('correct');
  // $('li').toggleClass('correct');
  // $('li').first().toggleClass('done');
  // $('li').toggleClass('done');


  //Selectors
  // const $divs = $('div');
  // const $divHighlight = $('.highlight');
  // const $thirdDiv = $('#third');
  // const $firstDiv = $('div:first-of-type');
  // // const $firstDiv = $('div:first'); jQuery short version but slower than CSS
  //
  // $divs.css('background', 'purple');
  // $divHighlight.css('width', '200px');
  // $thirdDiv.css('border', '2px solid orange');
  // $firstDiv.css('color', 'pink');

});
