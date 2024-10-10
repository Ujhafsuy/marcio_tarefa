function soma(){
    const num_f1 = Number(document.querySelector('#um').value)
    const num_f2 = Number(document.querySelector('#dois').value)
    const num_f3 = Number(document.querySelector('#tres').value)
    
    const pg = document.querySelector('p')
    pg.innerHTML = `Resultado ${num_f1 + num_f2 + num_f3}`
}

const botao = document.querySelector('button')
botao.addEventListener('click', soma)
