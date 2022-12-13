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
function manipulação(){

}

function muda(...valor_class){
    valor_class.map((elemen,ind)=>{
         elemen.classlist.toggles("ola")
         return pegaNU(onumero)
    })
    function pegaNU(valor){
        var primeiroN= Number(valor)
        caixa.value=primeiroN

    }
}

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
    muda(...valores)

    if(ind==0){

    }
    })
})
