/*ARMIN-CARD-SCRIPT*/
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






