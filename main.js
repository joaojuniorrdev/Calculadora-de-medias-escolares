let notas = []
let media = document.querySelector('td#media')
let res = document.querySelector('span#res')

function adicionar(){
    event.preventDefault()
    res.classList.remove('aprovado')
    res.classList.remove('reprovado')
    
    let nomef = document.getElementById('nomef').value
    let notaf = Number(document.getElementById('notaf').value)

    

    if( notaf < 0 || notaf > 10){
        alert('Revise os dados no formulario e tente novamente!')
    }
    else{

        let linha = '<tr>'
        linha += `<td>${nomef}:</td>`
        linha += `<td>${notaf}</td>`
        linha += `<td>${notaf >= 7 ? '<img src="images/aprovado.png"' : '<img src="images/reprovado.png"'}</td>`
        linha += '</tr>'
    
        let tbod = document.querySelector('tbody')
        tbod.innerHTML += linha
        notas.push(notaf)
    }

    let soma = 0
        for(let a = 0; a < notas.length; a++){
            soma+=notas[a]
        }
    
        console.log(soma)
    
        let mediaA = soma / notas.length
    
        mediaA = Math.floor(mediaA)
    
        media.innerHTML = mediaA

    if(mediaA >= 7){
        res.classList.add('aprovado')
        res.innerHTML = 'Aprovado'
    }
    else{
        res.classList.add('reprovado')
        res.innerHTML = 'Reprovado'
    }
    
}



