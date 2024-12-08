export function loadContactInfo () {
    const content = document.querySelector('#content')
    content.innerHTML = ''
    const contactDiv = document.createElement('div')
    const contactHeading = document.createElement('h2')
    const contactPara = document.createElement('p')
    const contactInfo = document.createElement('div')

    const formInfo = document.createElement('form')
    const input1 = document.createElement('input')
    const input2 = document.createElement('input')
    const formButton = document.createElement('button')
    const messageTextArea = document.createElement('textarea')

    input1.type ='text'
    input2.type = 'email'

    input1.placeholder = 'Your name'
    input2.placeholder = 'Your Email'
    
    input1.required = true
    input2.required = true
    messageTextArea.required = true

    formButton.type = 'submit';
    formButton.textContent = 'Send Message';

    messageTextArea.placeholder = 'Your Message';
    messageTextArea.rows = 5;


    formInfo.className = 'contact-form'
    contactDiv.className = 'contact-section'
    contactInfo.className = 'contact-info'

    contactHeading.innerHTML = 'Contact Us'
    contactPara.innerHTML = 'If you have any questions or need assistance, feel free to reach out to us!'


    formInfo.appendChild(input1)
    formInfo.appendChild(input2)
    formInfo.appendChild(messageTextArea)
    formInfo.appendChild(formButton)
    contactDiv.appendChild(contactHeading)
    contactDiv.appendChild(contactPara)


    const contactArray = [{heading:'Address', para: '123 Smith Street Melbourne 3098'},
        {heading: 'Email', para: 'contact@bennys.com'},
        {heading: 'Phone', para: '123334533'}
    ]

    contactArray.forEach((value) => {
        const infoItem = document.createElement('div')
        const infoItemHeading = document.createElement('h3')
        const infoItemPara = document.createElement('p')

        infoItemHeading.innerText = value.heading
        infoItemPara.innerText = value.para

        infoItem.className = 'info-item'
        infoItem.appendChild(infoItemHeading)
        infoItem.appendChild(infoItemPara)
        contactInfo.appendChild(infoItem)

    })

    contactDiv.appendChild(contactInfo)
    contactDiv.appendChild(formInfo)
    content.appendChild(contactDiv)
}