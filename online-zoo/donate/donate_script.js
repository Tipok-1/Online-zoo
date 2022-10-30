let dots = document.querySelectorAll('.big_circle');
let number = document.querySelectorAll('.money');
let days = document.querySelector('.number');
let input = document.querySelector('#Another_amount');
for(let i = 0; i< dots.length; i++)
{
    dots[i].addEventListener('click', ()=>{
        if(!dots[i].classList.contains('active_big_circle'))
        {
            let n = Number(number[i].querySelector('span').innerHTML);
            input.value = n;
            days.innerHTML = `${n/250}`
            for(let num of number)
            {
                num.querySelector('img').src = 'img/money.svg';
                if(num.classList.contains('active_number'))
                {
                    num.classList.remove('active_number');
                }
                number[i].querySelector('img').src = 'img/orange_dollar.svg';
                number[i].classList.add('active_number');
            }
            for(let dot of dots)
            {
                if(dot.querySelector('.small_circle').classList.contains('active_small_circle'))
                {
                    dot.querySelector('.small_circle').classList.remove('active_small_circle');
                }

                if(dot.classList.contains('active_big_circle'))
                {
                    dot.classList.remove('active_big_circle');
                }
            }
            dots[i].classList.add('active_big_circle');
            dots[i].querySelector('.small_circle').classList.add('active_small_circle');
        }
    })
}
input.addEventListener('keydown',(e)=>{
    let prohibited = ['e','E','+','-'];
    for(simb of prohibited)
    {
        if(e.key == simb)
        {
            e.preventDefault();
        }
    }
})
input.addEventListener('input',()=>{
    if(input.value.length > 4) {
        input.value = input.value.substr(0, 4);
    }
    for(let i = 0; i< number.length; i++)
    {
        let n = Number(number[i].querySelector('span').innerHTML);
        if(input.value == n)
        {
            dots[i].click();
        }
        else{
            if(dots[i].querySelector('.small_circle').classList.contains('active_small_circle'))
            {
                dots[i].querySelector('.small_circle').classList.remove('active_small_circle');
            }

            if(dots[i].classList.contains('active_big_circle'))
            {
                dots[i].classList.remove('active_big_circle');
            }
            if(number[i].classList.contains('active_number'))
            {
                number[i].classList.remove('active_number');
            }
            number[i].querySelector('img').src = 'img/money.svg';
            
        }
    }
})
for(let i = 0; i< number.length; i++)
{
    number[i].style.userSelect = 'none';
    number[i].setAttribute('draggable','false');

    number[i].addEventListener('click', ()=>{
        dots[i].click();
    });
}


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