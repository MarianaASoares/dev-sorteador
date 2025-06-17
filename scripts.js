function generateNumber(){

    const inputMin = Math.ceil (document.querySelector(".input-min").value)
    const inputMax = Math.floor(document.querySelector(".input-max").value) 

    if( inputMin >= inputMax){
        alert("O valor mínimo deve ser MENOR que o valor máximo")
    } else {
        const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

    alert(`O número sorteado é ${result}`)
    }



   
    
}







