function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora < 12){
        img.src = 'img/manhã.jpg'
        msg.innerHTML = `Agora são ${hora} horas, bom dia!`
        document.body.style.background = "#e2cd9f"
    }else if(hora >= 12 && hora <= 18){
        img.src = 'img/tarde.jpg'
        msg.innerHTML = `Agora são ${hora} horas, tarde`
        document.body.style.background = "#b9e46f"
    }else{
        img.src = 'img/noite.jpg'
        msg.innerHTML = `Agora são ${hora} horas, Boa noite!`
        document.body.style.background = "#515154"
    }
}