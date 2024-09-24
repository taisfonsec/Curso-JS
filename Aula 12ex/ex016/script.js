function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('width', '250px')
        img.setAttribute('height', '250px')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe_homem.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_homem.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto_homem.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe_mulher.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'jovem_mulher.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto_mulher.png')
            } else{
                //idoso
                img.setAttribute('src', 'idoso_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}