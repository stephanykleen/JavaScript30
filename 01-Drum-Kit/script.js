window.addEventListener('keydown', playSound)
  

function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    if(!audio){return}
    const key = document.querySelector(`.key[data-key="${e.code}"]`)
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing')
    console.log(key)
  }

function removeTransition(e){
    if(e.propertyName !== 'transform'){
      return}
    this.classList.remove('playing')
  }
  
  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
