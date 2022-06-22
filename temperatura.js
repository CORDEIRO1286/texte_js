
function calculo(){
  var corpo=document.querySelector('body')
  var qtd=document.getElementById("1")
    
    corpo.innerHTML=""
    for(i=0;i<qtd.value;i++){
        corpo.innerHTML+=
        "<input type='text' name='dados' placeholder='Digite temperatura    '>"+"<br>"

    }
    corpo.innerHTML+="<button onclick='enviar()'>Analisar Temperaturas  </button>"
}

function enviar(){
  var corpo=document.querySelector('body')
  let tmp=[]
  let med=0
  let media=0

  let dados=document.getElementsByName("dados")
  for (i=0;i<dados.length;i++){
    tmp.push(parseFloat(dados[i].value))

  }
  var ord=tmp.sort((a,b)=>a>b?1:-1);
  var temperaturas=""

  for (i=0;i<ord.length;i++){
    temperaturas+=ord[i]+"k"
    media+=ord[i]
  }
  media=media/ord.length
  
  
  if(ord.length%2==0){
    alert(ord.length/2)
    med=(ord[ord.length/2]+ord[ord.length/2+1])/2
  }else{
    med=ord[(ord.length+1)/2]
  }
  corpo.innerHTML=""
  corpo.innerHTML="Temperaturas ordenadas: "+temperaturas+"<br>"

  corpo.innerHTML+="A media é :"+media +"K"+"<br>"
  corpo.innerHTML+="Mediana é :" +med+"k"

   }

  
    

