/*DOM */
let topbtn = document.querySelectorAll('.scrollTop')
let body = document.querySelector('body')




/*選單加上active*/

function getScrollTop(){
    topbtn.forEach(function(x){
        let winscroll = window.pageYOffset;
       let target =x.getAttribute('href');
       let Pos = document.querySelector(target);
       let PosHeight = Pos.getBoundingClientRect()
       let targetPos = Pos.offsetTop    
       if (winscroll+200 >= targetPos && (PosHeight.height +targetPos) >winscroll){
           topbtn.forEach(function(e){
               if(winscroll+200 >= targetPos &&"#"+Pos.getAttribute('id') == e.getAttribute('href')){
                e.classList.remove('active')
                e.classList.add("active")
               }else{
                e.classList.remove('active')
               }
            })
       }

    })
}
window.addEventListener('scroll',getScrollTop)

/*進度條 */
let showSkill = false;
let Bar = document.querySelectorAll('.progress-bar')
let skillTop = document.querySelector("#skills").offsetTop;
function progressBar(){
    if(window.pageYOffset + window.innerHeight /2 > skillTop  && !showSkill ){
        showSkill = true;
        Bar.forEach(function(e){
            let thisvalue = e.getAttribute("data-progress");
            e.style.width = `${thisvalue}%`
        })
    }
}
window.addEventListener('scroll',progressBar)

/*三大重點fade */
let fadeAnimate = document.querySelectorAll('.animated');
function pointFade(){
    for(let i=0 ;i<fadeAnimate.length; i++){
        if(window.pageYOffset +window.innerHeight/2 > getOffsetSum(fadeAnimate[i])){
            fadeAnimate[i].classList.remove('animated');
            fadeAnimate[i].classList.add('fadeIn');
        }
    }
}
window.addEventListener('scroll',pointFade)


/*背景圖滾動 */

function bgScroll(){
    document.querySelector("#profiles").style['background-position-x']=`-${window.pageYOffset/2}px`;
    document.querySelector("#header-ele").style.transform=`translateY(${window.pageYOffset/2}px)`
}


window.addEventListener('scroll',bgScroll)

/*計算高度 */
function getOffsetSum(elem) {
    let top=0;
    while(elem) {
        top = top + parseInt(elem.offsetTop);
        elem = elem.offsetParent;
    }
    return top;
}









