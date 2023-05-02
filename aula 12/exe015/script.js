function verifica (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idade')
    var msg = document.getElementById('msg')

    if (fano.value.length == 0 || (fano.value) > ano){
        alert("[ERRO] Verifique os dados digitados")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/homen_bebe.jpg')
            }else if(idade < 21){
                //jovem
            }else if(idade < 60){
                //adulto
            }else{
                //idoso
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                //criança
            }else if(idade < 21){
                //jovem
            }else if(idade < 60){
                //adulto
            }else{
                //idoso
            }
        }
        msg.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        divfoto.appendChild(img)
    }
}

    