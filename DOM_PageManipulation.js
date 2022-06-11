var myImg = document.createElement('img');
myImg.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
myImg.style.width = '200px';
// document.body.append(myImg);

//myImg.style.transform = 'translate(0px,-200px)';
document.body.append(myImg);
myImg.style.transition = 'all 2s';

const sheet = new CSSStyleSheet();
sheet.replaceSync('* {transition: all 2s}');
document.adoptedStyleSheets = [sheet];

const allEll = document.body.children;


// document.body.style.backgroundImage = myImg;
// x=document.querySelector('#a-button');

// x.addEventListener('mousedown', function(){document.body.style.backgroundImage=myImg})
// x.addEventListener('mouseleave', function(){myImg.remove()})
// x.addEventListener('mousedown', function(){document.canvas.append(myImg)})
// x.addEventListener('mousedown', function(){document.body.appendChild(myImg)})
// x.addEventListener('mouseleave', function(){myImg.remove()})
setInterval(()=>{
    for(let el of allEll){
        const rotation = Math.floor(Math.random()*360)
        const x = Math.floor(document.body.clientWidth*Math.random()*-1);
        const y = Math.floor(document.body.clientHeight*Math.random()*-1);
        el.style.transform = `translate(${x}px,${y}px) rotate(${rotation}deg)`;
    }
    
},2000)
