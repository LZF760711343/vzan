/**
 * Created by Administrator on 2017/1/18.
 */
$(function () {
    $('.index-module-two-li').mouseenter(function () {
        $(this).find('img').attr('src','images/index-module-two-0'+($(this).index()+1)+'-1.png')
    })
        .mouseleave(function () {
        $(this).find('img').attr('src','images/index-module-two-0'+($(this).index()+1)+'.png')
    });
    $('.index-module-four-rel').mouseenter(function () {
        $(this).find('div:first-child').css({'opacity':'0.3'})
    }).mouseleave(function () {
        $(this).find('div:first-child').css({'opacity':'0.1'})
    });
    $('.index-module-five-city a').click(function () {
        $(this).addClass('bianse').siblings().removeClass('bianse');
        var int=$(this).index();
        $('.index-module-five-tubiao').eq(int).css({'display':'block'}).siblings('div').css({'display':'none'});
    });

    $('.hand').mouseenter(function () {
        $(this).css('cursor','pointer');
    });
    $('.xiaotu1').click(function () {
        $('.index-module-one-erweima').css('display','none');
        $('.index-module-one-denglu').css('display','block');
    });
    $('.xiaotu2').click(function () {
        $('.index-module-one-erweima').css('display','block');
        $('.index-module-one-denglu').css('display','none');
    });

    $('.colorbl').click(function(){
        $('body,html').animate({ scrollTop: 0 }, 400);
    });

    $(".colorb2").mouseenter(function(){
        $(".kefu-tk").css("display","block");
    });
    $(".colorb2").mouseleave(function(){
        $(".kefu-tk").css("display","none");
    });

    $(".colorb3").mouseenter(function(){
        $(".erweima-tk").css("display","block");
    });
    $(".colorb3").mouseleave(function(){
        $(".erweima-tk").css("display","none");
    });  

     $(".index-nav-ul li.active").mouseenter(function(){
        $(".product-list").slideDown("fast");
     });
     $(".index-nav-ul li.active").mouseleave(function(){
        $(".product-list").slideUp("fast");
     });
    $('.five-tang1').click(function () {
        $(this).addClass('index-module-five-col1').removeClass('index-module-five-col2');
        $('.five-tang2').removeClass('index-module-five-col1').addClass('index-module-five-col2');
    });
     $('.look-more').click(function () {
         $('.index-module-five-tanchukuang').slideDown();
     });
     $('.five-guan').click(function () {
         $('.index-module-five-tanchukuang').slideUp();
     });
    $('.span-kan1').click(function () {
        $('.span-kan1-p1').css('display','none');
        $('.span-kan1-p2').css('display','block');
        }
    );
    $('.span-kan2').click(function () {
        $('.span-kan1-p2').css('display','none');
        $('.span-kan1-p1').css('display','block');
        }
    );
    $('.span-kan3').click(function () {
        $('.span-kan1-p3').css('display','none');
        $('.span-kan1-p5').css('display','none');
        $('.span-kan1-p4').css('display','block');
        }
    );
    $('.span-kan4').click(function () {
        $('.span-kan1-p4').css('display','none');
        $('.span-kan1-p3').css('display','none');
        $('.span-kan1-p5').css('display','block');
        }
    );
    $('.span-kan5').click(function () {
        $('.span-kan1-p5').css('display','none');
        $('.span-kan1-p4').css('display','none');
        $('.span-kan1-p3').css('display','block');
        }
    );
    $('.guigezhi-red-alert').slideDown(600);
    setTimeout(function(){
        $('.guigezhi-red-alert').slideUp(600)
    },3000);
    $('.index-nav-a').mouseenter(function(){
        $(".kefu-tk02").css("display","block");
    });
    $(".index-nav-a").mouseleave(function(){
        $(".kefu-tk02").css("display","none");
    });

});


