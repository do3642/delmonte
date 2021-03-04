window.addEventListener('DOMContentLoaded',function(){
   
    function slideBox(){
        var i=0; //이동값
        var a; //if문 사용할 변수
        $('.visual button').on('click',function(){
            i += 1;
            a= $(this).text();
            // console.log('클릭했을때 i='+i);
            if(a =='Prev'){
                i= i-2;
                // console.log('prev일때 i='+i);
            }
            $('.visual .moveBox').css({
                left:-i*100+'%'
            });
          
           
           
            
        });
    }
    slideBox();
   
});