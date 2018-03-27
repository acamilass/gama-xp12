
function enviarDados(event){
   event.preventDefault();
   
   let nome = document.querySelector("#nome");
   let email = document.querySelector("#email");
   let empresa = document.querySelector("#empresa");
//    alert(nome.value);


   let pessoa = {
       nome: nome.value,
       email: email.value,
       empresa: empresa.value
   };

   let dados = JSON.stringify(pessoa);

   salvandoDados(dados);
   
}        
        
function salvandoDados(dados){
    let http = new XMLHttpRequest;
        let url = "https://my-json-server.typicode.com/acamilass/gama-xp/pessoas";

        http.open("POST", url, true);
        http.setRequestHeader("Content-Type", "application/json");

        alert("Dados enviados com sucesso");
       
        http.addEventListener("load", function() {
            if(http.readyState == 4 && http.status == 201) {
                 console.log(`Resposta: ${http.response}`);
            }else {
                console.log("erro");
            }
            
        });
        
        http.send(dados);
    
    this._limpaForm();    
}      

function _limpaForm(){
    this.nome.value = "";
    this.email.value = "";
    this.empresa.value = "";
}

        
        