export default  { 
    //_______________________________________________________________________________

    MostraNaTela: function (exibir,setexibir,vetoNumero,NumeroClickado){
        if(exibir==="0" && vetoNumero[0].numero===""){ //para remover o zero 
            setexibir(NumeroClickado)
        }else if(vetoNumero[0].numero.length >= 1){//para concatena
            setexibir(exibir + NumeroClickado)
        }else if(exibir==="-"||exibir==="+"){//quando a conta for iniciada com + ou -
            setexibir(exibir + NumeroClickado)
        }
     },

    //_______________________________________________________________________________

    armazenaNoVeto: function (vetoNumero,setVetoNumero,Numero){

        const tamanhoVeto  = vetoNumero.length - 1 //local do ultiom veto

        let cloneVetoNumero = [...vetoNumero] // crone vato 
 
        if(cloneVetoNumero[tamanhoVeto].operado2.length > 0){// quando operado2 for > 0
            cloneVetoNumero.push({numero:Numero,operado2:""}) // vai cria um novo objeto para o veto, já com o numero clickado
            setVetoNumero([...cloneVetoNumero])//devolver
            
        }else{
            cloneVetoNumero[tamanhoVeto].numero +=Numero // adisionando novo numero 
            setVetoNumero([...cloneVetoNumero])//devolver
        }
    },

    //_______________________________________________________________________________

    funçaoDel:function({vetoNumero,setVetoNumero,exibir,setexibir}){

        const tamanhoVeto  = vetoNumero.length - 1 //posição do ultiom veto

        const cloneVeto = [...vetoNumero] //clone veto 

        const stringObjetoOperado = cloneVeto[tamanhoVeto].operado2 // onde fica armazenado "+ - . / *"

        const stringObjetoNumero = cloneVeto[tamanhoVeto].numero //onde fica armazenado numero

        if(numeroVasioOperadoVasio(stringObjetoOperado,stringObjetoNumero)){ //se o operado2 e o numero estiverem vasio
            if(cloneVeto.length > 1){ //para não apaga meu primeiro veto  
                cloneVeto.pop()//excluir veto vasio 
                setVetoNumero([...cloneVeto]) //devolver vetores anteriores
                limpesaVeto()
            }else{
                cloneVeto[tamanhoVeto].operado = "+"//caso tenha sido alterado vai devolver para positivo o operado "é o operado do primeiro numero"
                setVetoNumero([...cloneVeto])
                limpatela(exibir,setexibir)//vai limpa um caracter que estiver na tela
            }
        }else if(!(numeroVasioOperadoVasio(stringObjetoOperado,stringObjetoNumero))){ //se o operado2 e o numero for > 1
            limpesaVeto()//fuçao para limpa um carácter
        }

        function limpesaVeto(){
            
            if(stringObjetoOperado.length > 0){ //  operado2 > 0
                limpatela(exibir,setexibir) //vai limpa um caracter que estiver na tela
                cloneVeto[tamanhoVeto].operado2 = "" //vai limpa o operado2 
                setVetoNumero([...cloneVeto])//devolvê-lo  

            }else if(stringObjetoNumero.length > 0) { // numero > 0
                limpatela(exibir,setexibir)//vai limpa um caracter que estiver na tela
                const tamanhoString =  stringObjetoNumero.length - 1 //tamonho string 
                cloneVeto[tamanhoVeto].numero = stringObjetoNumero.slice(0,tamanhoString) //vai me retorna uma nova string com menos um caracte do final
                setVetoNumero([...cloneVeto])//vai retorna o novo veto 
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
    },

    //_______________________________________________________________________________

    inserindoOperado:function(vetoNumero,setVetoNumero,Operado,setexibir,exibir){
        const cloneVeto =[...vetoNumero] //clone vetoNumero
        const posiçaoveto = cloneVeto.length -1 //posição vetoNumero
        
        if(cloneVeto.length===1 && cloneVeto[posiçaoveto].numero === "" ){//so vai passa se for o primeiro veto é se nenhum número for clickado 
            if(Operado==="+"||Operado==="-"){ //se o que foi clickado foi  + ou -
                setexibir(Operado) //novo valor na tela 
                cloneVeto[posiçaoveto].operado = Operado,//novo valo para o arry de objeto 
                setVetoNumero([...cloneVeto])
            }
        }else if( cloneVeto[posiçaoveto].numero.length > 0 ){// se já tiver clickado em um numero 
            if(cloneVeto[posiçaoveto].operado2 ===""){//se não tiver nenhum operado na frente dese numero
                setexibir(exibir+Operado)//mostra na tela 
                AddVetoNumero()

            }else if(cloneVeto[posiçaoveto].operado2.length > 0){//se já tiver um operado na frente do número
                let croneString = new String(exibir)
                croneString = croneString.slice(0,croneString.length-1)//remover o valor anterior
                croneString += Operado // adsiona novo valo no local  
                setexibir(croneString)//mostra na tela
                AddVetoNumero()
                
            }
        }
        function AddVetoNumero(){
            cloneVeto[posiçaoveto].operado2 = Operado,//novo valo para o arry de objeto 
            setVetoNumero([...cloneVeto])
        }
    },
    //________________________________________________________________________

    reset:function(setexibir,setVetoNumero){//para limpa tudo que já foi feito
        setexibir("0")
        setVetoNumero([{ operado:"+",numero:"",operado2:""}])
    },

    //________________________________________________________________________
    calcular:function(vetoNumero,setVetoNumero,setexibir){
        const calculo = {//objeto para calculo 
            "x":(numero,numero2)=>(numero*numero2),
            "/":(numero,numero2)=>(numero/numero2),
            "+":(numero,numero2)=>(numero+numero2),
            "-":(numero,numero2)=>(numero-numero2)
        }

        let cloneveto = [...vetoNumero]
        loopcalculo()

        function loopcalculo(){//vei ser repetida essa função ate o veto estiver um tamanho de 1

            if(cloneveto.find((e)=>e.operado2==="x" || e.operado2==="/")){// se tiver multiplicação ou divisão no veto 
                funcalculo("x","/") 
            }else{
                funcalculo("+","-")
            }

            if(cloneveto.length>1){//se o veto for maior que 1
                loopcalculo()
            }else{
                setVetoNumero([{ operado:"+",numero:cloneveto[0].numero,operado2:""}])//retorna um novo objeto
                setexibir(cloneveto[0].numero)//mostra na tela
            }                   

        }

        function funcalculo(Operado,Operado2){//função  para efetua os calculos
            const indsiOperado = cloneveto.findIndex((e)=>e.operado2===Operado || e.operado2===Operado2)//para encontra onde esta o operado 

            const primeiroValo = cloneveto[indsiOperado].numero
            const OperadorParacalculo = cloneveto[indsiOperado].operado2
            const segundoValo = cloneveto[indsiOperado + 1 ].numero

            const valor = calculo[OperadorParacalculo](Number(primeiroValo),Number(segundoValo))//vai retorna o valor 

            cloneveto[indsiOperado].numero =  valor.toString()//vai devolver o valor em string
            cloneveto[indsiOperado].operado2 = cloneveto[indsiOperado + 1].operado2 //vai receber o operador do veto a frente
            cloneveto.splice(indsiOperado+1,1)//vai remover um veto
        }
    }

}
// Funcionalidade para ser feira no futuro quado eu deixo o primeiro número negativo ele me retorna positivo
