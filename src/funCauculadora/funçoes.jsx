export default  { 

    //esse e um objeto de funçoes

    //_______________________________________________________________________________

    MostraNaTela: function (exibir,setexibir,NumeroClickado){
        if(exibir==="0"){
            setexibir(NumeroClickado)
        }else if(!(exibir==="0")){
            setexibir(exibir + NumeroClickado)
        }
    },

    //_______________________________________________________________________________

    armazenaNoVeto: function (vetoNumero,setVetoNumero,Numero){

        const tamanhoVeto  = vetoNumero.length - 1 //local do ultiom veto

        const vetoParaEspalha = [...vetoNumero] // crone vato 

        vetoParaEspalha[tamanhoVeto].numero +=Numero // adisionando novo numero 

        setVetoNumero([...vetoParaEspalha]) //veto com novas informaçoes
        console.log(vetoNumero)
    },

    //_______________________________________________________________________________

    funçaoDel:function({vetoNumero,setVetoNumero,exibir,setexibir}){

        const tamanhoVeto  = vetoNumero.length - 1 //posiçao do ultiom veto

        const croneVeto = [...vetoNumero] //corne veto 

        const stringObjetoOperado = croneVeto[tamanhoVeto].operedo2 // onde fica meus "+ - . / *"

        const stringObjetoNumero = croneVeto[tamanhoVeto].numero //onde fica meus numero

        if(numeroVasioOperadoVasio(stringObjetoOperado,stringObjetoNumero)){ //se o operado2 e o numero estiverem vasio
            if(croneVeto.length > 1){ //para nao apaga meu ultimo veto  
                croneVeto.pop()//excluir veto vasio 
                setVetoNumero([...croneVeto]) //devolver veto vetores anteriores
                limpesaVeto()//fuçao para limpa um carácter
            }
        }else if(!(numeroVasioOperadoVasio(stringObjetoOperado,stringObjetoNumero))){ //se o operado2 e o numero for > 1
            limpesaVeto()//fuçao para limpa um carácter
        }

        function limpesaVeto(){
            
            if(stringObjetoOperado.length > 0){ // numero for === 0  && operado2 > 0
                limatela(exibir,setexibir) //vai limpa um caracter que estiver na tela
                croneVeto[tamanhoVeto].operedo2 = "" //vai limpa o que estiver dentro dele
                setVetoNumero([...croneVeto])//devolvê-lo  
                console.log(vetoNumero)

            }else if(stringObjetoNumero.length > 0) { // se numro > 0 && operado2 == 0
                limatela(exibir,setexibir)//vai limpa um caracter que estiver na tela
                const tamanhoString =  stringObjetoNumero.length - 1 //tamonho string 
                croneVeto[tamanhoVeto].numero = stringObjetoNumero.slice(0,tamanhoString) //vai me retorna uma nova string com menos um caracte do final
                setVetoNumero([...croneVeto])//vai retorna o novo veto 
                console.log(vetoNumero)

            }
            
        }
        
        function numeroVasioOperadoVasio(operado,numero){ //funçao para if
            if(operado.length === 0 && numero.length === 0 ){
                return true
            }else{
                false
            }
        }
        function limatela (exibir,setexibir){ 

            const stringTela = new String(exibir)// string para modifica 
            if(stringTela.length === 1){ //se o tamanho da string for 1
                setexibir("0")//retorna  0
            }else if(stringTela.length > 1 ){ //se o tamanho da string for > 1
                setexibir(stringTela.slice(0,stringTela.length-1))//retorna a string menos o ultimo caracter
            }
        }
    }

    //_______________________________________________________________________________

}
// lembra da order me calculo -5+5*4