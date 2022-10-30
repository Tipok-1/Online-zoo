let nav = document.querySelectorAll('.nav');
let nav_links = [];
for(let i = 0; i< nav.length; i++)
{
    nav_links[i] = nav[i].querySelectorAll('a');
}

for(let nv = 0; nv < nav_links.length; nv++)
{
    for(let i = 0; i < nav_links[nv].length; i++)
    {
        nav_links[nv][i].addEventListener("click",
        (e)=>{
            let next = ((nv == 1) ?0 : 1);
            if(
                nav_links[nv][i].classList.contains('active_link')){
                e.preventDefault();
            }
            else{
                for(let link of nav_links[nv]){
                    link.classList.remove('active_link');
                }
                for(let link of nav_links[next]){
                    link.classList.remove('active_link');
                }
                nav_links[nv][i].classList.add('active_link');
                if(next == 0 && i == 3)
                {
                    nav_links[next][i+1].classList.add('active_link');
                }
                else if(next == 1 && i == 4){
                    nav_links[next][i-1].classList.add('active_link');
                }
                else if(next == 1 && i == 3){
                }
                else{nav_links[next][i].classList.add('active_link');}
                
            }
        })
    }
}
let bt_5 =document.querySelector('#bt_5');
let foto_card = document.querySelectorAll(".foto_card");
for(let i = 0; i< foto_card.length;i++)
{
    foto_card[i].addEventListener('mouseenter',()=>{
        let width = parseInt(window.getComputedStyle(foto_card[0].querySelector("img"),null).getPropertyValue("height"));
        foto_card[i].querySelector("img").style.height = `${width + 10}px`;
        Object.assign(foto_card[i].querySelector('.card_info').style, {
            top: '-100px',
            zIndex:'3',
          });
          foto_card[i].querySelector('.card_title').style.color = 'rgba(255,255,255,0.9)';
          foto_card[i].querySelector('.card_description').style.color = 'rgba(255,255,255,0.9)';
          foto_card[i].querySelector('.ico').style.top= '100px'

    })
    foto_card[i].addEventListener('mouseleave',()=>{
        let width = parseInt(window.getComputedStyle(foto_card[0].querySelector("img"),null).getPropertyValue("height"));
        foto_card[i].querySelector("img").style.height = `${width}px`;
        Object.assign(foto_card[i].querySelector('.card_info').style, {
            top: '0',
            backgroundColor:'transparent',
          });
          foto_card[i].querySelector('.card_title').style.color = '#000000';
          foto_card[i].querySelector('.card_description').style.color = '#000000';
          foto_card[i].querySelector('.ico').style.top = '0'
    })
}
/*comments*/
let not_tablet = true;
let comments = document.querySelectorAll(".more_text");

for(let i = 0; i< comments.length;i++)
{
    if(comments[i])
    {
        comments[i].addEventListener('mouseenter',()=>{
            comments[i].querySelector('p').style.marginRight = '0';
            
        })
        comments[i].addEventListener('mouseleave',()=>{
            if(not_tablet){
                comments[i].querySelector('p').style.marginRight = '6px';
            }
            
        })
    }
}




/*email */
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
let email = document.querySelector(".email");
let submit_button = document.querySelector(".submit_button");
let valid = false;
let empty = true;
submit_button.addEventListener('click', (e)=>{
    if(!valid){
        e.preventDefault();
        if(empty){
            email.placeholder = 'Email не введён';
        }
    }
})
email.addEventListener('input', ()=>{
    if(emailValid(email.value))
    {
        email.classList.add('email_active');
        submit_button.classList.add('submit_button_active')
        if(email.classList.contains('email_mistake')){
            email.classList.remove('email_mistake')
            submit_button.classList.remove('submit_button_mistake')
        }
        empty = false;
    }
    else{
        email.classList.add('email_mistake');
        submit_button.classList.add('submit_button_mistake');
        if(email.classList.contains('email_active')){
            email.classList.remove('email_active')
            submit_button.classList.remove('submit_button_active')
        }
        empty = false;
        valid = false;
    }
    if(email.value == ''){
        if(email.classList.contains('email_active')){
            email.classList.remove('email_active')
            submit_button.classList.remove('submit_button_active')
        }
        if(email.classList.contains('email_mistake')){
            email.classList.remove('email_mistake')
            submit_button.classList.remove('submit_button_mistake')
        }
        email.placeholder = 'Enter your email';
        empty = true;
    }
})
function emailValid(value){
    if(EMAIL_REGEXP.test(value))
    {
        empty = true;
        valid = true;
    }
    return EMAIL_REGEXP.test(value);
}
