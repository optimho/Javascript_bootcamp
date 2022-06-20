const parentUL = document.querySelector('ul')
const newLi = document.createElement('li')
newLi.innerText = 'I am a UI ath the top of the list'
newLi.classList.add('todo')
const anotherLi = document.createElement('li')
anotherLi.innerText = 'I am another UI at the bottom of the list'
anotherLi.classList.add('todo')
parentUL.appendChild(anotherLi)
const firstLi = document.querySelector('li.todo')
parentUL.insertBefore(newLi, firstLi)


const allitemsInUl =  document.querySelectorAll('li.todo')[2]
const inTheMiddle = document.createElement('li')
inTheMiddle.innerText = ' I am in the middle  '
inTheMiddle.classList.add('todo')
parentUL.insertBefore(inTheMiddle, allitemsInUl)


/* Here is another method using insertAdjacent
*/
const i = document.createElement('li')
i.innerText = 'before the first element'
const j = document.createElement('li')
j.innerText = 'after the first element'

const randomItem = document.querySelector('li.special')
randomItem.insertAdjacentElement('beforebegin', i)
randomItem.insertAdjacentElement('afterend', j)



/* Here is another way of doing things
    This is called
 */

const firstParagraph = document.querySelector('#main')
firstParagraph.append(i) // you can add multiple elements (a,b,c,...)
firstParagraph.prepend(j)



