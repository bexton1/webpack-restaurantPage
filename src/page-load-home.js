export const loadHomePage = () => {

const content = document.querySelector('#content')
content.innerHTML = ''

const aboutInfoDiv = document.createElement('div')
const headingOne = document.createElement('h1')
const aboutText = document.createElement('p')

headingOne.classList.add('heading')
aboutText.classList.add('about-text')
aboutInfoDiv.classList.add('about-info')

headingOne.innerHTML = 'About Us'
aboutText.innerHTML = 'Welcome to Bennys – your one-stop destination for quality Italian food. At Bennys, we believe in providing exceptional quality, unforgettable experiences, and customer-first services. <br>  <br>  Founded on the principle that great products should be accessible to everyone, Bennys is more than just a Pizza shop. Were a community of food lovers, innovators and dreamers, united by a passion for delicious meals.'

aboutInfoDiv.appendChild(headingOne)
aboutInfoDiv.appendChild(aboutText)
content.appendChild(aboutInfoDiv)

openingHours()
location()

}

function openingHours() {
    const array = [ 
'<strong>Monday:</strong> 9:00 AM - 5:00 PM',
'<strong>Tuesday:</strong> 9:00 AM - 5:00 PM',
'<strong>Wednesday:</strong> 9:00 AM - 5:00 PM',
'<strong>Thursday:</strong> 9:00 AM - 8:00 PM',
'<strong>Friday:</strong> 9:00 AM - 8:00 PM',
'<strong>Saturday:</strong> 10:00 AM - 6:00 PM',
'<strong>Sunday:</strong> Closed'
        ]

    const openingHoursDiv = document.createElement('div')
    const headingTwo = document.createElement('h2')
    const timeUl = document.createElement('ul')

    openingHoursDiv.classList.add('opening-hours')
    headingTwo.classList.add('heading')
    timeUl.classList.add('opening-text')

    array.forEach((item) => {
        const listItems = document.createElement('li')
        listItems.innerHTML = item
        timeUl.appendChild(listItems)
    }) 

    headingTwo.textContent = 'Opening Hours'

    openingHoursDiv.appendChild(headingTwo)
    openingHoursDiv.appendChild(timeUl)
    content.appendChild(openingHoursDiv)
    
}

function location () {
    const locationDiv = document.createElement('div')
    const headingThree = document.createElement('h2')
    const locationText = document.createElement('p')

    locationDiv.classList.add('location')
    locationText.classList.add('location-addy')

    headingThree.innerHTML = 'Our Location'
    locationText.innerHTML = '666 Smith Street<br>Melbourne, 3069'

    locationDiv.appendChild(headingThree)
    locationDiv.appendChild(locationText)
    content.appendChild(locationDiv)
}