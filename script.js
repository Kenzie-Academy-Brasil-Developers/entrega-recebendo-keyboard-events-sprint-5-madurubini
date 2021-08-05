let boxTop = 200;
let boxLeft = 200;
let end = document.getElementById('end')
let somFundo = document.getElementById("musicaFundo")
let somVitoria = document.getElementById("musicaPaz")




document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  somFundo.play()
  if(keyName === "ArrowDown"){
      boxTop += 10
  } 
  if(keyName === "ArrowUp"){
      boxTop -= 10
  }
  if(keyName === "ArrowRight"){
    boxLeft += 10
  } 
 if(keyName === "ArrowLeft"){
    boxLeft -= 10
 }

  document.getElementById("box").style.top = boxTop + "px"
  document.getElementById("box").style.left = boxLeft + "px"

  if(boxTop >= 510 && boxTop <= 530 && boxLeft >= 720 && boxLeft <= 740){
      let msg = document.createElement('div')
      msg.className = "mensagem"
      msg.innerText = "Olá meu fera, você acabou com a Guerra"
      end.appendChild(msg)
      somFundo.pause()
      somVitoria.play()
     
  }

});


  