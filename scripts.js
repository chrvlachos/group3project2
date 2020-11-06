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

function disappearModal(index) {
    setTimeout(() => function(index){ 
        console.log('1');
        
        modals[index].classList.remove('share-modal--visible')
        }, 5000)
}

icons.forEach(icon => {
    icon.addEventListener('click', () => {
       if(icon.classList.contains('share-modal__one')) {
           modals[0].classList.add('share-modal--visible')
           disappearModal(0);
       }else if(icon.classList.contains('share-modal__two')) {
        modals[1].classList.add('share-modal--visible')
        disappearModal(1);
       }
    })
})






