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
var valores = [...document.querySelectorAll("tbody>tr>td")]
valores.map((elemento,ind)=>{
    console.log(elemento)
})