
const alllis = document.querySelectorAll('li')
const colors = ['red','green','blue','yellow','blue','purple','orange','orchid']

alllis.forEach((li, i)=>{
    // console.log(`${li} and ${i}`)
    const color = colors[i];
    li.style.color = color;
})
