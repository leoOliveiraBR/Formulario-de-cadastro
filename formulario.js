function validar(){
    let senha = document.getElementById('senhax').value;
    let email = document.getElementById('email1').value;
    let senhaconf = document.getElementById('senhaConf').value;




    if(!email || !senha || !senhaconf){
    alert("você deixou campos vazios,por favor preecher!")
}else{
        alert("obrigado por prenecher todas as informaçoes");
    }
    
}