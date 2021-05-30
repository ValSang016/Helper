$j = jQuery;

/*
  --- Copy from here
*/

if ($j('.custom_page_123').length>0){
  $j('<div class="qna"></div>').appendTo("#col2");
  $j('.box.text:not(:first-of-type)').each(function(){
    $j(this).appendTo('.qna');
    $j(this).children('.box_content').slideUp();
  });
  
  $j('.qna .box.text').click(function(){
    if ($j(this).hasClass('qna_show')){
      $j('.qna_show').children('.box_content').slideUp();
      $j('.qna_show').removeClass('qna_show');
    } else {
      $j('.qna_show').children('.box_content').slideUp();
      $j('.qna_show').removeClass('qna_show');
      $j(this).addClass('qna_show');
      $j(this).children('.box_content').slideDown();
    }
  });
}