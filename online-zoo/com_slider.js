let comment_slider = document.querySelector('.com_slider');
let comm =  document.querySelectorAll('.com');
let scl = document.querySelector('#scroll');
let direction = 'right';
let last_value = 0;
let mql = window.matchMedia('(max-width: 640px)');
let mql_two_card = window.matchMedia('(max-width: 930px)');
let how_scroll_card = 3;
let grid = document.querySelector('.section3');
let ft_card = grid.querySelectorAll('.foto_card');
/*comm slider */
scl.addEventListener('input',()=>{
    let min_width = parseInt(window.getComputedStyle(comm[0],null).getPropertyValue("min-width")) + 30;
    for(cm of comm)
    {
        cm.style.left = `-${(scl.value * min_width)}px`;
    }
})
let com_popap = document.querySelector(".more_text_popap");

com_popap.addEventListener('mouseenter',()=>{
    console.log('enter');
    com_popap.querySelector('p').style.marginRight = '0px';
    
})
com_popap.addEventListener('mouseleave',()=>{
    com_popap.querySelector('p').style.marginRight = '6px';
})
/*check width */
function check_tablet(){
    if(mql_two_card.matches)
    {
        how_scroll_card = 2;
    }
    else{
        how_scroll_card = 3;
    }
    for(let card of ft_card)
    {
        if(!mql.matches)
        {
            let foto_card_width = parseInt(window.getComputedStyle(grid.querySelector('.foto_card'),null).getPropertyValue("width")) +
            parseInt(window.getComputedStyle(grid,null).getPropertyValue("grid-column-gap")) + 
            parseInt(window.getComputedStyle(grid.querySelector('.foto_card'),null).getPropertyValue("margin-left"));
            card.style.left = `${0 - foto_card_width * how_scroll_card}px`;
        }
        else{
            card.style.left = `${0}px`;
        }
        full_left = 0;
    }
    if(mql.matches)
    {
        not_tablet = false;
        for(cm of comm)
        {
            cm.style.left = '0px';
        }
        /*popap*/
        for(cm of comm)
        {
            cm.addEventListener('click',popap);
        }
    }
    else{
        not_tablet = true;
        lightbox.style.display = 'none';
        for(cm of comm)
        {
            cm.removeEventListener('click',popap);
        }
    }
}
document.addEventListener("DOMContentLoaded", check_tablet);
window.addEventListener('resize',check_tablet)

/*random_card */
function random_value(min,max){
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
function rand(first_card, second_card)
{
    let arr = [];
    let interval = second_card - first_card;
    for(let i = first_card; i < second_card+1; i++)
    {
        arr.push(i);
    }
    let first, second, path, name, place, meatfish_or_bananobamboo,meatfish_or_bananobamboo2,
    ico_1,ico_2, class_ico_1,class_ico_2,class_ico2_1,class_ico2_2;
    while(arr.length != 0)
    {
        let index = random_value(0, arr.length -1);
        first = arr[index];
        arr.splice(index,1);
        second = arr[0];
        arr.splice(0,1);

        path = ft_card[first].querySelector('.grid_foto img').src;
        name = ft_card[first].querySelector('.card_title').innerHTML;
        place = ft_card[first].querySelector('.card_description').innerHTML;
        ft_card[first].querySelector('.grid_foto img').src = ft_card[second].querySelector('.grid_foto img').src;
        ft_card[first].querySelector('.card_title').innerHTML = ft_card[second].querySelector('.card_title').innerHTML;
        ft_card[first].querySelector('.card_description').innerHTML =ft_card[second].querySelector('.card_description').innerHTML;
        ft_card[second].querySelector('.grid_foto img').src = path;
        ft_card[second].querySelector('.card_title').innerHTML = name;
        ft_card[second].querySelector('.card_description').innerHTML = place;

        
        meatfish_or_bananobamboo = ft_card[first].querySelector('.ico').classList[0];
        if(meatfish_or_bananobamboo == 'ico')
        {
            meatfish_or_bananobamboo=ft_card[first].querySelector('.ico').classList[1];
        }
        meatfish_or_bananobamboo2 = ft_card[second].querySelector('.ico').classList[0];
        if(meatfish_or_bananobamboo2 == 'ico')
        {
            meatfish_or_bananobamboo2 =ft_card[second].querySelector('.ico').classList[1];
        }
        //console.log( String(ft_card[first].querySelector('.ico').classList));
        if(meatfish_or_bananobamboo == meatfish_or_bananobamboo2)
        {

        }
        else{

            ft_card[first].querySelector('.ico').classList.remove(`${String(meatfish_or_bananobamboo)}`);
            ft_card[first].querySelector('.ico').classList.add(`${String(meatfish_or_bananobamboo2)}`);
            ico_1 = ft_card[first].querySelector('.ico').querySelectorAll('img')[0].src;
            ico_2 = ft_card[first].querySelector('.ico').querySelectorAll('img')[1].src;
            class_ico_1 = ft_card[first].querySelector('.ico').querySelectorAll('img')[0].classList[0];
            class_ico_2 = ft_card[first].querySelector('.ico').querySelectorAll('img')[1].classList[0];
            class_ico2_1 = ft_card[second].querySelector('.ico').querySelectorAll('img')[0].classList[0];
            class_ico2_2 = ft_card[second].querySelector('.ico').querySelectorAll('img')[1].classList[0];

            ft_card[first].querySelector('.ico').querySelectorAll('img')[0].classList.remove(`${class_ico_1}`);
            ft_card[first].querySelector('.ico').querySelectorAll('img')[1].classList.remove(`${class_ico_2}`);
            ft_card[first].querySelector('.ico').querySelectorAll('img')[0].classList.add(`${class_ico2_1}`);
            ft_card[first].querySelector('.ico').querySelectorAll('img')[1].classList.add(`${class_ico2_2}`);
            ft_card[first].querySelector('.ico').querySelectorAll('img')[0].src = ft_card[second].querySelector('.ico').querySelectorAll('img')[0].src;
            ft_card[first].querySelector('.ico').querySelectorAll('img')[1].src = ft_card[second].querySelector('.ico').querySelectorAll('img')[1].src;


            ft_card[second].querySelector('.ico').classList.remove(`${String(meatfish_or_bananobamboo2)}`);
            ft_card[second].querySelector('.ico').classList.add(`${String(meatfish_or_bananobamboo)}`);
            ft_card[second].querySelector('.ico').querySelectorAll('img')[0].classList.remove(`${class_ico2_1}`);
            ft_card[second].querySelector('.ico').querySelectorAll('img')[1].classList.remove(`${class_ico2_2}`);
            ft_card[second].querySelector('.ico').querySelectorAll('img')[0].classList.add(`${class_ico_1}`);
            ft_card[second].querySelector('.ico').querySelectorAll('img')[1].classList.add(`${class_ico_2}`);
            ft_card[second].querySelector('.ico').querySelectorAll('img')[0].src = ico_1;
            ft_card[second].querySelector('.ico').querySelectorAll('img')[1].src = ico_2;
        }
    }
}
rand(0,23);

/* */
/*popap */
let lightbox = document.querySelector('.lightbox');
lightbox.addEventListener('click',(e)=>{
    if(e.target == e.currentTarget)
    {
        lightbox.style.display = 'none';
    }
})
lightbox.querySelector('.wrap_for_cross_popap').addEventListener('click',()=>{lightbox.style.display = 'none';});
function popap(e){
    lightbox.style.display = 'flex';
    lightbox.querySelector('.section5_ico_popap img').src = e.currentTarget.querySelector('.section5_ico img').src;
    lightbox.querySelector('.section5_name').innerHTML = e.currentTarget.querySelector('.section5_name').innerHTML;
    lightbox.querySelector('.section5_country_date').innerHTML = e.currentTarget.querySelector('.section5_country_date').innerHTML;
    lightbox.querySelector('.section5_comm_text_popap').innerHTML = e.currentTarget.querySelector('.section5_comm_text').innerHTML;
}
/*borger */
let burger = document.querySelector('.burger');
let burger_line = burger.querySelectorAll('.burger_line');
let burger_body = document.querySelector('.burger_body');
let menu_vizible = false;
let back_fone = document.querySelector('.back_ground_borger');
let back = back_fone.querySelector('div');
back.addEventListener('click',()=>{
    burger.click();
})
burger.addEventListener('click',()=>{
    if(!menu_vizible){

        burger_line[0].classList.add('first_burger_line')
        burger_line[1].classList.add('second_burger_line');
        burger_line[2].style.display = 'none';

        burger_body.style.transform = 'scale(1,1)';
        back_fone.style.display = 'block';
        menu_vizible = true;
    }
    else{
        burger_line[0].classList.remove('first_burger_line')
        burger_line[1].classList.remove('second_burger_line');
        burger_line[2].style.display = 'block';

        burger_body.style.transform = 'scale(0,0)';
        back_fone.style.display = 'none';
        menu_vizible = false;
    }
})


/*grid */
let grid_left = document.querySelectorAll('.button_left_grid');
let grid_right = document.querySelectorAll('.button_right_grid');
let full_left = 0;
for(let right of grid_right)
{
    right.addEventListener('click',()=>{
        if(!timer)
        {
            rand(0,23);
            move_card(true);
        }
    })
}
for(let left of grid_left)
{
    left.addEventListener('click',()=>{
        if(!timer)
        {
            rand(0,23);
            move_card(false);
        }
    })
}

let timer;
let first_pack_card = 1;
function move_card(right)
{
        foto_card_width = parseInt(window.getComputedStyle(grid.querySelector('.foto_card'),null).getPropertyValue("width")) +
        parseInt(window.getComputedStyle(grid,null).getPropertyValue("grid-column-gap")) + 
        parseInt(window.getComputedStyle(grid.querySelector('.foto_card'),null).getPropertyValue("margin-left"));
        if(right){full_left += how_scroll_card}else{ full_left -= how_scroll_card};
        if(right)
        {
            for(let card of ft_card)
            {  
                card.style.transitionDuration = '.3s'
                card.style.left = `${parseInt(card.style.left) - foto_card_width * how_scroll_card}px`;
            }
            timer = setTimeout(()=>{
                if(how_scroll_card == 3)
                {

                    if(full_left > 15){full_left = 2*how_scroll_card};
                    if(full_left == 0) {full_left = 12}; 
                    if(full_left == -6) {full_left = 6};                   
                }
                if(how_scroll_card == 2)
                {
                    full_left > 18 ? full_left = 4*how_scroll_card:{};
                    full_left == 0 ? full_left = 12:{};
                    full_left == -8 ? full_left = 16:{};
                }
                let step;
                how_scroll_card == 3 ? step = 2: step = 4;
                
                if(full_left == step*how_scroll_card)
                {
                    for(let i = 0; i < how_scroll_card; i++)
                    {
                        ft_card[i].style.transitionDuration = '0s'
                        ft_card[i].style.left = `${0 + foto_card_width * how_scroll_card}px`
                        ft_card[i + 12].style.transitionDuration = '0s'
                        ft_card[i + 12].style.left = `${0 + foto_card_width * how_scroll_card}px`
                    }
                }
                else if(full_left == (step+1)*how_scroll_card)
                {
                    for(let i = 0; i < how_scroll_card; i++)
                    {
                        ft_card[i + how_scroll_card].style.transitionDuration = '0s'
                        ft_card[i + how_scroll_card].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*foto_card_width)}px`
                        ft_card[i + 12 + how_scroll_card].style.transitionDuration = '0s'
                        ft_card[i + 12 + how_scroll_card].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*foto_card_width)}px`
                    }
                }
                else if(full_left == (step+2)*how_scroll_card)
                {
                    for(let i = 0; i < how_scroll_card; i++)
                    {
                        ft_card[i + how_scroll_card*2].style.transitionDuration = '0s'
                        ft_card[i + how_scroll_card*2].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*2*foto_card_width)}px`
                        ft_card[i + 12 + how_scroll_card*2].style.transitionDuration = '0s'
                        ft_card[i + 12 + how_scroll_card*2].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*2*foto_card_width)}px`
                    }
                }
                else if(full_left == (step+3)*how_scroll_card)
                {
                    for(let i = 0; i < how_scroll_card; i++)
                    {
                        ft_card[i + how_scroll_card*3].style.transitionDuration = '0s'
                        ft_card[i + how_scroll_card*3].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*3*foto_card_width)}px`
                        ft_card[i + 12 + how_scroll_card*3].style.transitionDuration = '0s'
                        ft_card[i + 12 + how_scroll_card*3].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*3*foto_card_width)}px`
                    }
                }
                
                if(how_scroll_card == 2)
                {
                    if(full_left == (step+4)*how_scroll_card)
                    {
                        for(let i = 0; i < how_scroll_card; i++)
                        {
                            ft_card[i + how_scroll_card*4].style.transitionDuration = '0s'
                            ft_card[i + how_scroll_card*4].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*4*foto_card_width)}px`
                            ft_card[i + 12 + how_scroll_card*4].style.transitionDuration = '0s'
                            ft_card[i + 12 + how_scroll_card*4].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*4*foto_card_width)}px`
                        }
                    }
                    else if(full_left == (step+5)*how_scroll_card)
                    {
                        for(let i = 0; i < how_scroll_card; i++)
                        {
                            ft_card[i + how_scroll_card*5].style.transitionDuration = '0s'
                            ft_card[i + how_scroll_card*5].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*5*foto_card_width)}px`
                            ft_card[i + 12 + how_scroll_card*5].style.transitionDuration = '0s'
                            ft_card[i + 12 + how_scroll_card*5].style.left = `${0 + foto_card_width * how_scroll_card  - (how_scroll_card*5*foto_card_width)}px`
                        }
                    }
                }
                timer = clearTimeout(timer)}, 330);
            }
            else{
                for(let card of ft_card)
                {  
                    card.style.transitionDuration = '.3s'
                    card.style.left = `${parseInt(card.style.left) + foto_card_width * how_scroll_card}px`;
                }
                timer = setTimeout(()=>{
                    if(how_scroll_card == 3)
                    {
                        full_left < -12 ? full_left = -1*how_scroll_card:{};
                        full_left == 3 ? full_left = -9:{};
                        full_left == 9 ? full_left = -3:{};
                    }
                    else if(how_scroll_card == 2)
                    {
                        full_left < -12 ? full_left = -1*how_scroll_card:{};
                        full_left == 6 ? full_left = -6:{};
                        full_left == 14 ? full_left = -10:{};
                    }
                    how_scroll_card == 3 ? step = -1: step = -3;
                    if(how_scroll_card == 2)
                    {
                        if(full_left == -how_scroll_card)
                        {
                            for(let i = 0; i < how_scroll_card; i++)
                            {
                                ft_card[i + how_scroll_card*5].style.transitionDuration = '0s'
                                ft_card[i + how_scroll_card*5].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*5*foto_card_width)}px`
                                ft_card[i + 12 + how_scroll_card*5].style.transitionDuration = '0s'
                                ft_card[i + 12 + how_scroll_card*5].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*5*foto_card_width)}px`
                            }
                        }
                        else if(full_left == -2*how_scroll_card)
                        {
                            for(let i = 0; i < how_scroll_card; i++)
                            {
                                ft_card[i + how_scroll_card*4].style.transitionDuration = '0s'
                                ft_card[i + how_scroll_card*4].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*4*foto_card_width)}px`
                                ft_card[i + 12 + how_scroll_card*4].style.transitionDuration = '0s'
                                ft_card[i + 12 + how_scroll_card*4].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*4*foto_card_width)}px`
                            }
                        }
                    }
                    
                    if(full_left == step*how_scroll_card)
                    {
                        for(let i = 0; i < how_scroll_card; i++)
                        {
                            ft_card[i + how_scroll_card*3].style.transitionDuration = '0s'
                            ft_card[i + how_scroll_card*3].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*3*foto_card_width)}px`
                            ft_card[i + 12 + how_scroll_card*3].style.transitionDuration = '0s'
                            ft_card[i + 12 + how_scroll_card*3].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*3*foto_card_width)}px`
                        }
                    }
                    else if(full_left == (step-1)*how_scroll_card)
                    {
                        for(let i = 0; i < how_scroll_card; i++)
                        {
                            ft_card[i + how_scroll_card*2].style.transitionDuration = '0s'
                            ft_card[i + how_scroll_card*2].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*2*foto_card_width)}px`
                            ft_card[i + 12 + how_scroll_card*2].style.transitionDuration = '0s'
                            ft_card[i + 12 + how_scroll_card*2].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*2*foto_card_width)}px`
                        }
                    }
                    else if(full_left == (step-2)*how_scroll_card)
                    {
                        for(let i = 0; i < how_scroll_card; i++)
                        {
                            ft_card[i + how_scroll_card].style.transitionDuration = '0s'
                            ft_card[i + how_scroll_card].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*foto_card_width)}px`
                            ft_card[i + 12 + how_scroll_card].style.transitionDuration = '0s'
                            ft_card[i + 12 + how_scroll_card].style.left = `${0 - foto_card_width * how_scroll_card  - (how_scroll_card*foto_card_width)}px`
                        }
                    }
                    else if(full_left == (step-3)*how_scroll_card)
                    {
                        for(let i = 0; i < how_scroll_card; i++)
                        {
                            ft_card[i].style.transitionDuration = '0s'
                            ft_card[i].style.left = `${0 - foto_card_width * how_scroll_card}px`
                            ft_card[i + 12].style.transitionDuration = '0s'
                            ft_card[i + 12].style.left = `${0 - foto_card_width * how_scroll_card}px`
                        }
                    }
                    timer = clearTimeout(timer)}, 330);
                }
}
    
        
