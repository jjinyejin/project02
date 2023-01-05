$(function(){
    /*scrolling*/
    function scrolling(){
        $(window).scroll(function(){
            const scrollTop = parseInt($(window).scrollTop() + $(window).height()/1.5 );
        
            $('.back-to-position').each(function(){
                if(scrollTop>$(this).offset().top){
                    $(this).addClass('show');
                }else{
                    $(this).removeClass('show');
                }
            });
        });
    }
    
    var wd = $('html').width();
    /*e.preventDefault();*/

    /*menu*/
    var mnNav=$('.mnHdr .mnNav');
    var menu=$('.mnHdr .menuWrap');
    var menuIcon=$('.subNav ul li:last-child');
    var menuClose=$('.mnHdr .menuWrap .menu button');

    function menuD(){
        $('.mnHdr .mnNav,.mnHdr .menuWrap').hover(function(){
            menu.stop().slideDown();
        },function(){
            menu.stop().slideUp();
        });
    }

    function menuT(){
        mnNav.click(function(){
            menu.stop().slideToggle();
        });
    }

    function menuM(){
        menuIcon.click(function(){
            menu.css('right', 0);
        });
        menuClose.click(function(){
            menu.css('right', -500 + 'px');
        });
    }


    /*cnt03 슬라이드*/
    var cnt03View=$('.cnt03 .slideView');
    var cnt03Gr=$('.cnt03 .slideView .slideGr');
    var cnt03Idx=$('.cnt03 .index ul li');
    var num=0;

    function cnt03Index(){
        cnt03Idx.click(function(){
            var idx = $(this).index();
            
            cnt03Gr.css('margin-left', (idx * -50) + '%');
            cnt03Idx.removeClass('on');
            $(this).addClass('on');
        });
    }

    function cnt03Left(){
        num--;

        if(num<=0){
            num=0;
        }
        cnt03Gr.css('margin-left', num * -50 + '%');
        cnt03Idx.removeClass('on');
        cnt03Idx.eq(num).addClass('on');
    };

    function cnt03Right(){
        num++;

        if(num>=6){
            num=6;
        }
        cnt03Gr.css('margin-left', num * - 50 + '%');
        cnt03Idx.removeClass('on');
        cnt03Idx.eq(num).addClass('on');
    };

    function cnt03IndexM(){
        cnt03Idx.click(function(){
            var idx = $(this).index();
            
            cnt03Gr.css('margin-left', (idx * -100) + '%');
            cnt03Idx.removeClass('on');
            $(this).addClass('on');
        });
    }

    function cnt03LeftM(){
        num--;

        if(num<=0){
            num=0;
        }
        cnt03Gr.css('margin-left', num * -100 + '%');
        cnt03Idx.removeClass('on');
        cnt03Idx.eq(num).addClass('on');
    };

    function cnt03RightM(){
        num++;

        if(num>=7){
            num=7;
        }
        cnt03Gr.css('margin-left', num * - 100 + '%');
        cnt03Idx.removeClass('on');
        cnt03Idx.eq(num).addClass('on');
    };

    /*cnt04 슬라이드*/
    var cnt04View=$('.cnt04 .slideFrame .slideView');
    var cnt04Idx=$('.cnt04 .index ul li');
    var cnt04MnT=$('.cntFrame .cntWrap04 .cnt04 .slideFrame .slideView article .artFrame .texts .title .titleBox');
    var cnt04SubT=$('.cntFrame .cntWrap04 .cnt04 .slideFrame .slideView article .artFrame .texts .title p.subTitle');
    var cnt04Btn=$('.cntWrap04 .cnt04 .slideFrame .slideView article .artFrame .texts .btn');
    var cnt04Igm1=$('.cntWrap04 .cnt04 .slideFrame .slideView article .artFrame .image .imgFrame img.img01');
    var cnt04Igm2=$('.cntWrap04 .cnt04 .slideFrame .slideView article .artFrame .image .imgFrame img.img02');
    var cnt04Button=$('.cntWrap04 .cnt04 .index .btn');
    
    cnt04View.eq(0).siblings().hide();
    cnt04Idx.click(function(){
        var idx04 = $(this).index();
        var bgc=$('.cntFrame .cntWrap04');
        var btnBox=$('.cntFrame .cntWrap04 .cnt04 .slideFrame .slideView article .artFrame .texts .btn .btnBox');
        var p=$('.cntWrap04 .cnt04 .index ul li');

        cnt04View.eq(idx04).siblings().fadeOut();
        cnt04View.eq(idx04).fadeIn(); 
        cnt04MnT.removeClass('show');
        cnt04MnT.eq(idx04).addClass('show');
        cnt04SubT.removeClass('show');
        cnt04SubT.eq(idx04).addClass('show');
        cnt04Btn.removeClass('show');
        cnt04Btn.eq(idx04).addClass('show');
        cnt04Igm1.removeClass('show');
        cnt04Igm1.eq(idx04).addClass('show');
        cnt04Igm2.removeClass('show');
        cnt04Igm2.eq(idx04).addClass('show');
        
        if(idx04==0){
            bgc.css('background' , '#fb9a00');
            btnBox.css('background' , '#fb9a00');
        }
        if(idx04==1){
            bgc.css('background' , '#ffcc3b');
            btnBox.css('background' , '#ffcc3b');
        }
        if(idx04==2){
            bgc.css('background' , '#5299ff');
            btnBox.css('background' , '#5299ff');
        }
        if(idx04==3){
            bgc.css('background' , '#ff5948');
            btnBox.css('background' , '#ff5948');
        }

        cnt04Button.animate({left : p.eq(idx04).offset().left});
    });

    /*cnt06 슬라이드*/
    var cnt06Idx=$('.cntWrap06 .cnt06 .cnt06Frame .thumbs ul li');
    var cnt06Gr=$('.cntWrap06 .cnt06 .cnt06Frame .cnt06View .cnt06Gr');
    var cnt06Title=$('.cnt06 .cnt06Frame .cnt06View .texts ul.title li');
    var cnt06Content=$('.cnt06 .cnt06Frame .cnt06View .texts ul.content li');
    var cnt06View=$('.cnt06 .cnt06Frame .cnt06View');
    var num2=0;

    function cnt06SlideD(){
        cnt06Idx.click(function(){
            var idx06= $(this).index();
     
            cnt06Gr.css('margin-left',(-100 * idx06) + '%');
            cnt06Title.hide();
            cnt06Title.eq(idx06).show();
            cnt06Content.hide();
            cnt06Content.eq(idx06).show();
         
        });
    }
    
    function cnt06Right(){
        num2++;
        if(num2>=5){
            num2=5;
        }
        cnt06Gr.css('margin-left', (-100 * num2) +'%');
        cnt06Title.hide();
        cnt06Title.eq(num2).show();
        cnt06Idx.removeClass('on');
        cnt06Idx.eq(num2).addClass('on');
    }

    function cnt06Left(){
        num2--;
        if(num2<=0){
            num2=0;
        }
        cnt06Gr.css('margin-left', (-100 * num2) +'%');
        cnt06Title.hide();
        cnt06Title.eq(num2).show();
        cnt06Idx.removeClass('on');
        cnt06Idx.eq(num2).addClass('on');
    }

    function cnt06SlideM(){
        cnt06Idx.click(function(){
            var idx06= $(this).index();
     
            cnt06Gr.css('margin-left',(-100 * idx06) + '%');
    
            cnt06Title.hide();
            cnt06Title.eq(idx06).show();
            cnt06Idx.removeClass('on');
            cnt06Idx.eq(idx06).addClass('on');
        });
    }

    /*디바이스별로 적용*/
    function wdr(){
        if(wd>=1026){
            menuD();
            cnt03Index();
            cnt03View.on('swipeleft', function(){
                cnt03Right();
            });
            cnt03View.on('swiperight', function(){
                cnt03Left();
            });

            cnt06SlideD();
            scrolling(); 
        }else if(420<=wd && wd<=1025){
            menuT();
            cnt03Index();
            cnt03View.on('swipeleft', function(){
                cnt03Right();
            });
            cnt03View.on('swiperight', function(){
                cnt03Left();
            });
            cnt06SlideD();
        }else{
            menuM();
            cnt03IndexM();
            cnt03View.on('swipeleft', function(){
                cnt03RightM();
            });
            cnt03View.on('swiperight', function(){
                cnt03LeftM();
            });
            cnt06SlideM();
            cnt06View.on('swipeleft', function(){
                cnt06Right();
            });
            cnt06View.on('swiperight', function(){
                cnt06Left();
            });
        }
    }

    wdr();
});