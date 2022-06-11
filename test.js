var myImg = document.createElement('img');
myImg.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
myImg.style.width = '200px';
// document.body.append(myImg);

// myImg.style.transform = 'translate(100px,100px)';
x=document.querySelector('#a-button');
x.addEventListener('mousedown', function(){document.body.append(myImg)})
x.addEventListener('mouseleave', function(){myImg.remove()})
// x.addEventListenerner('mouseover', ()=>{document.body.append(myImg)});

