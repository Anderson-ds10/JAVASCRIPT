function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('[ERRO] Verificar os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fAno.value)
        // res.innerHTML = `Idade calculada ${idade}` TESTE
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancamasc.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'adolescentemasc.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultomasc.png')
            }else {
                //Idoso
                img.setAttribute('src', 'velhomasc.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancafemi.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'adolescentefemi.png')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'adultofemi.png')
            }else {
                //Idoso
                img.setAttribute('src', 'velhafemi.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}