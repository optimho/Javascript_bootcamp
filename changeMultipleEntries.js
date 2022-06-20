/*This is the way you would go about changing multiple items
 you have to use a loop of sorts, there is no way of getting around it*/

const allLis = document.querySelectorAll('li');
for (let i=0; i<allLis.length; i++){
    console.log(allLis[i].innerText);
}

for (let li of allLis){
    li.innerHTML = 'We are the <b>champions</b>'
}


