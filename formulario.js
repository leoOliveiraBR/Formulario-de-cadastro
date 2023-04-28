function validar(){
    let nome = document.getElementById('nome1').value;
    let senha = document.getElementById('senhax').value;
    let email = document.getElementById('email1').value;
    let data = document.getElementById('nascimento1').value;
    let telefone = document.getElementById('telefone').value;
    let cpf = document.getElementById('cpf1').value;
    let cep = document.getElementById('cep1').value;
    let rua = document.getElementById('rua1').value;
    let bairro = document.getElementById('bairro1').value;
    let estado = document.getElementById('estado1').value;
    let cidade = document.getElementById('cidade1').value;
    let numero = document.getElementById('numero1').value;
    let senhaconf = document.getElementById('senhaConf').value;




    if(!email || !senha || !nome || !data || !telefone || !cpf || !cep || !cpf || !rua || !bairro || !estado || !cidade || !numero || !senhaconf){
    alert("você deixou campos vazios,por favor preecher!")
}else{
        alert("obrigado por prenecher todas as informaçoes");
    }
}