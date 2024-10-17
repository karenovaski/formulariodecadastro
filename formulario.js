const limparFormulario = () =>{
    document.getElementById('Logradouro').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Localidade').value = '';
    document.getElementById('Uf').value = '';
}
 
// Verrifica se o CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
 
// Função para preencher campos relacionados ao CEP
const preencherformulario = (endereco) =>{
    document.getElementById('Logradouro').value = endereco.logradouro;
// Coloca o valor de legradouro de API dentro do campo logradouro de formulário
    document.getElementById('Bairro').value = endereco.bairro;
    document.getElementById('Localidade').value = endereco.localidade;
    document.getElementById('Uf').value = endereco.uf;
}
 
// Função para consumo de API ViaCEP
const pesquisaCep = async() =>{
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url);
        const addres = await dados.json();
 
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
            }else{
                preencherformulario(addres)
            }
 
    }else{
        alert('CEP incorreto');
    }
}
 
// Execulta a ação de preenchimento de formulário ao deixar o campo do CEP
document.getElementById('cep').addEventListener('focusout', pesquisaCep);