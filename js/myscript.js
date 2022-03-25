        //슬라이드
        let nowSlide = 1;
        setInterval(function(){
            let slideEls = $('.slide');
            if(nowSlide>=3){
                nowSlide=1;
                for(let idx=0;idx<slideEls.length;idx++){
                    let leftVal = slideEls.eq(idx).position().left;
                    slideEls.eq(idx).css('left',leftVal+=2400);
                }
            }else{
                for(let idx=0;idx<slideEls.length;idx++){
                let leftVal = slideEls.eq(idx).position().left;
                slideEls.eq(idx).css('left',leftVal-=1200);
                }
                nowSlide++;
            }
        },3000);