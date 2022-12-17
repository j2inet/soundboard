




function start() {
    console.log('started');
    fetch('data/soundlist.json')
    .then(data=>data.json())
    .then(soundList=>{
        var buttonArea = document.getElementById('buttonArea');

        soundList.forEach(sound => {
            console.log(sound);

            var b  = document.createElement('button');
            if(!sound.image) {
                b.innerText = sound.title;
            } else {                

                b.style.background=`url(/audio/${sound.image})`;                
                b.dataset.backgroundImage = `/audio/${sound.image}`;      
                b.style.backgroundSize  = 'Contain'
                b.style.backgroundRepeat = 'No-repeat'
                b.style.backgroundPosition = 'center'
            }
            b.onclick = buttonClick;
            b.dataset.name = sound.name;
            buttonArea.append(b);
        });
    });
}

function stopAudio() { 
    var ap = document.getElementById('audioPlayer');
    ap.pause();
}
function buttonClick(e) {
    var ap = document.getElementById('audioPlayer');
    console.log(e.target);
    var soundUrl = `/audio/${e.target.dataset.name}`;
    
    ap.src = soundUrl;
    ap.play();
    console.log(soundUrl);
}

console.log('running')
document.onload=start();