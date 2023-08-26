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

        let croneVetoNumero = [...vetoNumero] // crone vato 
 
        if(croneVetoNumero[tamanhoVeto].operado2.length > 0){// quando operado2 for > 0
            croneVetoNumero.push({numero:Numero,operado2:""}) // vai cria um novo objeto para o veto, já com o numero clickado
            setVetoNumero([...croneVetoNumero])//devolver
            
        }else{
            croneVetoNumero[tamanhoVeto].numero +=Numero // adisionando novo numero 
            setVetoNumero([...croneVetoNumero])//devolver
        }
    },

    //_______________________________________________________________________________

    funçaoDel:function({vetoNumero,setVetoNumero,exibir,setexibir}){

        const tamanhoVeto  = vetoNumero.length - 1 //posição do ultiom veto

        const croneVeto = [...vetoNumero] //clone veto 

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

    //________________________________________________________________________

    reset:function(setexibir,setVetoNumero){//para limpa tudo que já foi feito
        setexibir("0")
        setVetoNumero([{ operado:"+",numero:"",operado2:""}])
    },

    //________________________________________________________________________
    calcular:function(vetoNumero,setVetoNumero,setexibir){// onde seram feitos todos os calculos 
        const calculo = {//objeto para calculo 
            "x":(numero,numero2)=>(numero*numero2),
            "/":(numero,numero2)=>(numero/numero2),
            "+":(numero,numero2)=>(numero+numero2),
            "-":(numero,numero2)=>(numero-numero2)
        }

        let croneveto = [...vetoNumero]
        loopcalculo()

        function loopcalculo(){//vei ser repetida essa função ate o veto estiver uma tamanho de 1

            if(croneveto.find((e)=>e.operado2==="x" || e.operado2==="/")){// se tiver multiplicação ou divisão no veto 
                funcalculo("x","/") 
            }else{
                funcalculo("+","-")
            }

            if(croneveto.length>1){//se o veto for maior que 1
                loopcalculo()
            }else{
                setVetoNumero([{ operado:"+",numero:croneveto[0].numero,operado2:""}])//retorna um novo objeto
                setexibir(croneveto[0].numero)//mostra na tela
            }                   

        }

        function funcalculo(Operado,Operado2){//função  para efetua os calculos
            const indsiOperado = croneveto.findIndex((e)=>e.operado2===Operado || e.operado2===Operado2)//para encontra onde esta o operado 

            const primeiroValo = croneveto[indsiOperado].numero
            const OperadorParacalculo = croneveto[indsiOperado].operado2
            const segundoValo = croneveto[indsiOperado + 1 ].numero

            const valor = calculo[OperadorParacalculo](Number(primeiroValo),Number(segundoValo))//vai retorna o valor 

            croneveto[indsiOperado].numero =  valor.toString()//vai devolver o valor em string
            croneveto[indsiOperado].operado2 = croneveto[indsiOperado + 1].operado2 //vai receber o operador do veto a frente
            croneveto.splice(indsiOperado+1,1)//vai remover um veto
        }
    }

}