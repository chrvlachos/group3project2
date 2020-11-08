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

/*GET DYNAMIC CONTENT*/
const recipes = [
    [
    //six times pasta
    {
        'recipeTitle': 'Bolognese1',
        'recipeDescription': 'Classic Bolognese',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/pasta.jpg'
        },
    {
        'recipeTitle': 'Seafood Pasta',
        'recipeDescription': 'Classic Bolognese',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/pasta2.jpg'
        },
    {
        'recipeTitle': 'Bolognese3',
        'recipeDescription': 'Classic Bolognese',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/pasta3.jpg'
        },
    {
        'recipeTitle': 'Bolognese4',
        'recipeDescription': 'Classic Bolognese',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/pasta4.jpg'
        },
    {
        'recipeTitle': 'Bolognese5',
        'recipeDescription': 'Classic Bolognese',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/pasta5.jpg'
        },
    {
        'recipeTitle': 'Bolognese6',
        'recipeDescription': 'Classic Bolognese',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/pasta6.jpg'
        }
    ],
    [
    //six times simplicity
    {
        'recipeTitle': 'Simplicity1',
        'recipeDescription': 'Sooo simple1!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/simple1.jpg'
        },
    {
        'recipeTitle': 'Simplicity2',
        'recipeDescription': 'Sooo simple2!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/simple2.jpg'
        },
    {
        'recipeTitle': 'Simplicity3',
        'recipeDescription': 'Sooo simple3!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/simple3.jpg'
        },
    {
        'recipeTitle': 'Simplicity4',
        'recipeDescription': 'Sooo simple4!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/simple4.jpg'
        },
    {
        'recipeTitle': 'Simplicity5',
        'recipeDescription': 'Sooo simple!5',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/simple5.jpg'
        },
    {
        'recipeTitle': 'Simplicity6',
        'recipeDescription': 'Sooo simple6!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/simple6.jpg'
        }
    ],
    [
    //six times bar&grill
    {
        'recipeTitle': 'Bar&Grill1',
        'recipeDescription': 'Say Cheese1!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/grill1.jpg'
        },
    {
        'recipeTitle': 'Bar&Grill2',
        'recipeDescription': 'Say Cheese2!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/grill2.jpg'
        },
    {
        'recipeTitle': 'Bar&Grill3',
        'recipeDescription': 'Say Cheese3!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/grill3.jpg'
        },
    {
        'recipeTitle': 'Bar&Grill4',
        'recipeDescription': 'Say Cheese4!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/grill4.jpg'
        },
    {
        'recipeTitle': 'Bar&Grill5',
        'recipeDescription': 'Say Cheese5!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/grill5.jpg'
        },
    {
        'recipeTitle': 'Bar&Grill6',
        'recipeDescription': 'Say Cheese6!',
        'recipeLink': 'linkAdress',
        'image': 'url(./img/armin/grill6.jpg'
        }
    ]
] 

const itemDescriptions = document.querySelectorAll('.item__description')
const pastaNav =document.getElementById('pasta-nav')
const simplicityNav = document.getElementById('simplicity-nav');
const barGrillNav = document.getElementById('bar-grill');
const sectionHeadline = document.querySelector('.content__headline')



pastaNav.addEventListener('click', () => {
    sectionHeadline.innerHTML = 'Pasta Dishes'
    for (let i = 0; i < recipes[0].length; i++) {
        for (let j = 0; j < itemDescriptions.length; j++) {
            //title
            itemDescriptions[i].firstElementChild.nextElementSibling.innerHTML = recipes[0][i].recipeTitle;
            //description
            itemDescriptions[i].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = recipes[0][i].recipeDescription
            //link
            itemDescriptions[i].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = recipes[0][i].recipeLink
            //bg-image
            itemDescriptions[i].parentElement.style.backgroundImage = recipes[0][i].image
        }
    }
})

simplicityNav.addEventListener('click', () => {
    sectionHeadline.innerHTML = 'Simple Stuff'
    for (let i = 0; i < recipes[1].length; i++) {
        for (let j = 0; j < itemDescriptions.length; j++) {
            //title
            itemDescriptions[i].firstElementChild.nextElementSibling.innerHTML = recipes[1][i].recipeTitle;
            //description
            itemDescriptions[i].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = recipes[1][i].recipeDescription
            //link
            itemDescriptions[i].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = recipes[1][i].recipeLink
            //bg-image
            itemDescriptions[i].parentElement.style.backgroundImage = recipes[1][i].image
        }
    }
})

barGrillNav.addEventListener('click', () => {
    sectionHeadline.innerHTML = 'Bar & Grill'
    for (let i = 0; i < recipes[2].length; i++) {
        for (let j = 0; j < itemDescriptions.length; j++) {
            //title
            itemDescriptions[i].firstElementChild.nextElementSibling.innerHTML = recipes[2][i].recipeTitle;
            //description
            itemDescriptions[i].firstElementChild.nextElementSibling.nextElementSibling.innerHTML = recipes[2][i].recipeDescription
            //link
            itemDescriptions[i].firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerHTML = recipes[2][i].recipeLink
            //bg-image
            itemDescriptions[i].parentElement.style.backgroundImage = recipes[2][i].image
        }
    }
})







