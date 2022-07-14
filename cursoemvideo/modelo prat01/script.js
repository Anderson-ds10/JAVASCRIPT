function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = 'manha.png'
    document.body.style.background = '#BAD0DB'
}else if(hora >= 12 && hora < 18){
   //BOA TARDE
    img.src = 'tarde.png'
    document.body.style.background = '#F6CA89'
}else{
    //BOA NOITE
    img.src = 'noite.png'
    document.body.style.background = '#997EB5'
}


}