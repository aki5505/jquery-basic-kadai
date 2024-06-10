$(function () {
    // id属性がfadeoutの要素がクリックされたら
    $('#fade-out').on('click', function() {
      // フェードアウトする
      $('#target').fadeOut();
    });

    // id属性がfadeinの要素がクリックされたら
    $('#fade-in').on('click', function() {
      // フェードインする
      $('#target').fadeIn();
    });

    // id属性がchange-colorの要素がクリックされたら
   $('#change-color').on('click', function(){
    // id属性がtargetの要素のcolorプロパティをredにする
    $('#target').css('color', 'red');
  });

   // id属性がchange-colorの要素がクリックされたら
  $('#change-text').on('click', function(){
    // id属性がtargetの要素の文字列を変更する
    $('#target').text('HELLO!');
  });
  });