export function loadMenu () {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const pizzas = [
        { name: "Margherita", description: "Classic tomato sauce, mozzarella, and fresh basil.", price: "$8.99" },
        { name: "Pepperoni", description: "Topped with pepperoni slices and mozzarella.", price: "$9.99" },
        { name: "Veggie Delight", description: "Loaded with mushrooms, bell peppers, olives, and onions.", price: "$10.99" },
        { name: "BBQ Chicken", description: "Grilled chicken, BBQ sauce, red onions, and cilantro.", price: "$12.99" },
        { name: "Meat Lover's", description: "Pepperoni, sausage, bacon, and ham.", price: "$13.99" },
    ];

    const menuDiv = document.createElement('div')
    const headingMenu = document.createElement('h1')
    const menuUl = document.createElement('ul')
    

    menuDiv.className = 'menu'
    menuUl.className = 'pizza-list'

    headingMenu.innerText = 'Menu'
    menuDiv.appendChild(headingMenu)

    pizzas.forEach((pizza) => {
        const listItem = document.createElement('li')
        const pizzaType = document.createElement('h2')
        const description = document.createElement('p')
        const span = document.createElement('span')

        pizzaType.innerText = pizza.name
        description.innerText = pizza.description
        span.innerText = pizza.price

        listItem.className = 'pizza-item'
        span.className = 'price'

        listItem.appendChild(pizzaType)
        listItem.appendChild(description)
        listItem.appendChild(span)
        menuUl.appendChild(listItem)

    })
    menuDiv.appendChild(menuUl)
    content.appendChild(menuDiv)

}