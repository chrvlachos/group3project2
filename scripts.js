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
        console.log(index);
        modals[index].classList.remove('share-modal--visible')
        }, 5000)
}

icons.forEach(icon => {
    icon.addEventListener('click', () => {
       if(icon.classList.contains('share-modal__one')) {
           console.log('entered');
           modals[0].classList.add('share-modal--visible')
           disappearModal(0);
       }else if(icon.classList.contains('share-modal__two')) {
        modals[1].classList.add('share-modal--visible')
        disappearModal(1);
       }else if(icon.classList.contains('share-modal__three')) {
        modals[2].classList.add('share-modal--visible')
        disappearModal(2);
       }else if(icon.classList.contains('share-modal__four')) {
        modals[3].classList.add('share-modal--visible')
        disappearModal(3);
       }else if(icon.classList.contains('share-modal__five')) {
        modals[4].classList.add('share-modal--visible')
        disappearModal(4);
       }else if(icon.classList.contains('share-modal__six')) {
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








