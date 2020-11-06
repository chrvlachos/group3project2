/*ARMIN*/
/*CARD-SCRIPT*/
const cards = document.querySelectorAll('.grid__item')
const descriptionMagnis = document.querySelectorAll('.description__magni')

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        switch (card.id) {
            case 'one':
                descriptionMagnis[0].classList.add('description__magni--animated')
                break;
            case 'two':
                descriptionMagnis[1].classList.add('description__magni--animated')
                break;
            case 'three':
                descriptionMagnis[2].classList.add('description__magni--animated')
                break;
            case 'four':
                descriptionMagnis[3].classList.add('description__magni--animated')
                break;
            case 'five':
                descriptionMagnis[4].classList.add('description__magni--animated')
                break;
            case 'six':
                descriptionMagnis[5].classList.add('description__magni--animated')
                break;
      
        }
    })

    card.addEventListener('mouseleave', () => {
        switch (card.id) {
            case 'one':
                descriptionMagnis[0].classList.remove('description__magni--animated')
                break;
            case 'two':
                descriptionMagnis[1].classList.remove('description__magni--animated')
                break;
            case 'three':
                descriptionMagnis[2].classList.remove('description__magni--animated')
                break;
            case 'four':
                descriptionMagnis[3].classList.remove('description__magni--animated')
                break;
            case 'five':
                descriptionMagnis[4].classList.remove('description__magni--animated')
                break;
            case 'six':
                descriptionMagnis[5].classList.remove('description__magni--animated')
                break;
      
        }
    }) 
})

/*SHARE-CURRENT-PAGE*/
const icons = document.querySelectorAll('.links__icon')
const modals = document.querySelectorAll('.share-modal')
const closeModal = document.querySelectorAll('.share-modal__close')

function disappearModal(index) {
    setTimeout(() => { 
        modals[index].classList.remove('share-modal--visible')
        }, 10000)
}

icons.forEach(icon => {
    icon.addEventListener('click', () => {
       if(icon.classList.contains('share-modal__one')) {
           let recipeLink = window.location.href
           modals[0].firstElementChild.nextElementSibling.nextElementSibling.value = recipeLink
           if(icon.classList.contains('instagram')) {
                modals[0].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/instagram.svg"><p>Instagramm</p>';
            }else if(icon.classList.contains('facebook')) {
                modals[0].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/facebook.svg"><p>Facebook</p>';
            }else if(icon.classList.contains('twitter')) {
                modals[0].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/twitter.svg"><p>Twitter</p>';
            }
            modals[0].classList.add('share-modal--visible')
            disappearModal(0);
       }else if(icon.classList.contains('share-modal__two')) {
            let recipeLink = window.location.href
            modals[1].firstElementChild.nextElementSibling.nextElementSibling.value = recipeLink
            if(icon.classList.contains('instagram')) {
                modals[1].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/instagram.svg"><p>Instagramm</p>';
            }else if(icon.classList.contains('facebook')) {
                modals[1].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/facebook.svg"><p>Facebook</p>';
            }else if(icon.classList.contains('twitter')) {
                modals[1].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/twitter.svg"><p>Twitter</p>';
            }
            modals[1].classList.add('share-modal--visible')
            disappearModal(1);
       }else if(icon.classList.contains('share-modal__three')) {
            let recipeLink = window.location.href
            modals[2].firstElementChild.nextElementSibling.nextElementSibling.value = recipeLink
            if(icon.classList.contains('instagram')) {
                modals[2].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/instagram.svg"><p>Instagramm</p>';
            }else if(icon.classList.contains('facebook')) {
                modals[2].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/facebook.svg"><p>Facebook</p>';
            }else if(icon.classList.contains('twitter')) {
                modals[2].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/twitter.svg"><p>Twitter</p>';
            }
            modals[2].classList.add('share-modal--visible')
            disappearModal(2);
       }else if(icon.classList.contains('share-modal__four')) {
            let recipeLink = window.location.href
            modals[3].firstElementChild.nextElementSibling.nextElementSibling.value = recipeLink
            if(icon.classList.contains('instagram')) {
                modals[3].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/instagram.svg"><p>Instagramm</p>';
            }else if(icon.classList.contains('facebook')) {
                modals[3].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/facebook.svg"><p>Facebook</p>';
            }else if(icon.classList.contains('twitter')) {
                modals[3].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/twitter.svg"><p>Twitter</p>';
            }
            modals[3].classList.add('share-modal--visible')
            disappearModal(3);
       }else if(icon.classList.contains('share-modal__five')) {
            let recipeLink = window.location.href
            modals[4].firstElementChild.nextElementSibling.nextElementSibling.value = recipeLink
            if(icon.classList.contains('instagram')) {
                modals[4].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/instagram.svg"><p>Instagramm</p>';
            }else if(icon.classList.contains('facebook')) {
                modals[4].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/facebook.svg"><p>Facebook</p>';
            }else if(icon.classList.contains('twitter')) {
                modals[4].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/twitter.svg"><p>Twitter</p>';
            }
            modals[4].classList.add('share-modal--visible')
            disappearModal(4);
       }else if(icon.classList.contains('share-modal__six')) {
            let recipeLink = window.location.href
            modals[5].firstElementChild.nextElementSibling.nextElementSibling.value = recipeLink
            if(icon.classList.contains('instagram')) {
                modals[5].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/instagram.svg"><p>Instagramm</p>';
            }else if(icon.classList.contains('facebook')) {
                modals[5].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/facebook.svg"><p>Facebook</p>';
            }else if(icon.classList.contains('twitter')) {
                modals[5].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = '<img src="./img/armin/twitter.svg"><p>Twitter</p>';
            }
            modals[5].classList.add('share-modal--visible')
            disappearModal(5);
       }
    })
})

//Close Modal manually
closeModal.forEach(x => {
    x.addEventListener('click', () => {
        modals.forEach(modal => {
            modal.classList.remove('share-modal--visible')
        })
    })
})

/*GET DYNAMIC SHARE-SERVICE AND LINK*/





