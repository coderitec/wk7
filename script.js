// querySelector
const para = document.querySelector('p')

const span = document.querySelector('p span')

let today =  'Friday'

const myName = 'Francis'

const heading = document.querySelector('.me')

heading.style.background = 'aqua'
heading.style.borderBottom = '10px solid blue'

let span2 = document.querySelector('h2 > span')

span2.textContent = myName

span.textContent = today

const list = document.querySelector('ol :nth-child(3)')


list.style.padding = '20px'
list.style.borderLeft = '3em double brown'
list.style.borderRight = '3em double brown'
list.textContent = 'honey'

// querySelectorAll
const lists = document.querySelectorAll('li')
lists[0].textContent = 'bread and beans'
lists[3].textContent = 'bread and beans'
lists[2].textContent = 'bread and beans'

const sectp = document.querySelectorAll('section p')

sectp[0].textContent = 'Religion: multi-religious'
sectp[1].textContent = 'Language: nigeri'
sectp[2].textContent = 'Continent: Africa'
sectp[3].textContent = 'Capital: Abuja'

// getElementById

const hen = document.getElementById('hen')
hen.style.textTransform = 'uppercase'

const fowl = document.querySelectorAll('#hen')[0]
fowl.style.color = 'crimson'

// getElementsByClassName
const ils = document.getElementsByClassName('you')
ils[0].innerText = 'amala'
ils[1].innerText = 'eba'
ils[2].innerText = 
`e
    b
        a`

const paras = document.getElementsByTagName('p')

paras[1].style.textDecoration = 'line-through'
paras[3].style.textDecoration = 'line-through'


