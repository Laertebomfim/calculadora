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

        const croneVetoNumero = [...vetoNumero] // crone vato 
 
        if(croneVetoNumero[tamanhoVeto].operado2.length > 0){// quando operado2 for === 0
            
            croneVetoNumero.push({numero:Numero,operado2:""}) // vai cria um novo objeto para o veto já com o numero clickado
            setVetoNumero([...croneVetoNumero])
            
        }else{
            
            croneVetoNumero[tamanhoVeto].numero +=Numero // adisionando novo numero 
            
            setVetoNumero([...croneVetoNumero])
        }
        console.log(vetoNumero)
    },

    //_______________________________________________________________________________

    funçaoDel:function({vetoNumero,setVetoNumero,exibir,setexibir}){

        const tamanhoVeto  = vetoNumero.length - 1 //posiçao do ultiom veto

        const croneVeto = [...vetoNumero] //crone veto 

        const stringObjetoOperado = croneVeto[tamanhoVeto].operado2 // onde fica armazenado "+ - . / *"

        const stringObjetoNumero = croneVeto[tamanhoVeto].numero //onde fica armazenado numero

        if(numeroVasioOperadoVasio(stringObjetoOperado,stringObjetoNumero)){ //se o operado2 e o numero estiverem vasio
            if(croneVeto.length > 1){ //para nao apaga meu ultimo veto  
                croneVeto.pop()//excluir veto vasio 
                setVetoNumero([...croneVeto]) //devolver veto vetores anteriores
                limpesaVeto()//fuçao para limpa um carácter
            }else{
                croneVeto[tamanhoVeto].operado = "+"//caso tenha sido alterado vai devolver para positivo o operado 
                setVetoNumero([...croneVeto])
                limpatela(exibir,setexibir)
            }
        }else if(!(numeroVasioOperadoVasio(stringObjetoOperado,stringObjetoNumero))){ //se o operado2 e o numero for > 1
            limpesaVeto()//fuçao para limpa um carácter
        }

        function limpesaVeto(){
            
            if(stringObjetoOperado.length > 0){ //  operado2 > 0
                limpatela(exibir,setexibir) //vai limpa um caracter que estiver na tela
                croneVeto[tamanhoVeto].operado2 = "" //vai limpa o que estiver dentro dele
                setVetoNumero([...croneVeto])//devolvê-lo  

            }else if(stringObjetoNumero.length > 0) { // numero > 0
                limpatela(exibir,setexibir)//vai limpa um caracter que estiver na tela
                const tamanhoString =  stringObjetoNumero.length - 1 //tamonho string 
                croneVeto[tamanhoVeto].numero = stringObjetoNumero.slice(0,tamanhoString) //vai me retorna uma nova string com menos um caracte do final
                setVetoNumero([...croneVeto])//vai retorna o novo veto 
            }
            
        }
        
        function numeroVasioOperadoVasio(operado,numero){ //funçao para if
            if(operado.length === 0 && numero.length === 0 ){
                return true
            }else{
                false
            }
        }
        function limpatela (exibir,setexibir){
            const stringTela = new String(exibir)// string para modifica 
                if(stringTela.length === 1){ //se o tamanho da string for 1
                    setexibir("0")//retorna  0
                }else if(stringTela.length > 1 ){ //se o tamanho da string for > 1
                    setexibir(stringTela.slice(0,stringTela.length-1))//retorna a string menos o ultimo caracter
                }
        }
        console.log(vetoNumero)
    },

    //_______________________________________________________________________________

    CalculoOperado:function(vetoNumero,setVetoNumero,Operado,setexibir,exibir){
        const croneVeto =[...vetoNumero] //crone vetoNumero
        const posiçaoveto = croneVeto.length -1 //posiçao vetoNumero
        
        if(croneVeto.length===1 && croneVeto[posiçaoveto].numero === "" ){//so vai passa se for o primeiro veto é se nenhum número for clickado 
            if(Operado==="+"||Operado==="-"){ //se o que foi clickado foi  + ou -
                setexibir(Operado) //novo valor na tela 
                croneVeto[posiçaoveto].operado = Operado,//novo valo para o arry de objeto 
                setVetoNumero([...croneVeto])
            }
        }else if( croneVeto[posiçaoveto].numero.length > 0 ){// se já tiver clickado em um numero 
            if(croneVeto[posiçaoveto].operado2 ===""){//se não tiver nenhum operado na frente dese numero
                setexibir(exibir+Operado)//mostra na tela 
                AddVetoNumero()

            }else if(croneVeto[posiçaoveto].operado2.length > 0){//se já tiver um operado na frente do número
                let croneString = new String(exibir)
                croneString = croneString.slice(0,croneString.length-1)//remover o valor anterior
                croneString += Operado // adsiona novo valo no local  
                setexibir(croneString)//mostra na tela
                AddVetoNumero()
                
            }
        }
        function AddVetoNumero(){
            croneVeto[posiçaoveto].operado2 = Operado,//novo valo para o arry de objeto 
            setVetoNumero([...croneVeto])
        }
        console.log(vetoNumero)
    },

}
// lembra da order me calculo -5+5*4