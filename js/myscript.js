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

        // 모달
        let modalN = document.querySelector('.modal-notice');
        let modalTit = document.querySelector('.modal-tit');
        let modalTxt = document.querySelector('.modal-txt');
        let modalTitle = document.querySelectorAll('.notice-content .title');
        let modalCon = document.querySelectorAll('.notice-content .content');
        let btnCloseN = document.querySelector('.modal-notice .modal-close');


        for(let idx=0; idx<modalTitle.length; idx++){
            
            modalTitle[idx].addEventListener('click',function(e){
                noticeBtn('block');
                modalTit.innerHTML = this.innerHTML;
                modalTxt.innerHTML = modalCon[idx].innerHTML;

                e.preventDefault();
            })
            
        }

        btnCloseN.addEventListener('click',function(){
            noticeBtn('none');
        })

        function noticeBtn(e){
            modalN.style.display = e;
        }