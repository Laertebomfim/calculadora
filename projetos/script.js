const funcoes = [
    (v1,v2)=>{
        return v1+v2
    },
    (v1,v2)=>{
        return v1-v2
    },
    (v1,v2)=>{
        return v1*v2
    },
    (v1,v2)=>{
        return v1/v2
    }
]



var valores = [...document.getElementsByClassName("numero")]
var manipula = [...document.getElementsByClassName("manipuladores")]
var onumero = '' 
const caixa= window.document.querySelector("thead>tr>th")

valores.map((elemento,inds)=>{
    elemento.addEventListener("click",()=>{
        onumero += elemento.innerHTML
        caixa.innerHTML=onumero
    })
})
manipula.map((elemento,ind)=>{
    elemento.addEventListener("click",()=>{
    valores.map((ele,ind)=>{
        ele.classList.add("colet")

    })
    var segundoN = [...window.document.getElementsByClassName("numero colet")]
    console.log(segundoN)

    if(ind==0){

    }
    })
})
