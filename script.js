document.getElementById('buscarCep').addEventListener('click', function() {
    const cep = prompt('Digite o CEP para busca:');
    const url = `https://viacep.com.br/ws/${cep}/json`;

    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            if(data.erro) {
                alert('CEP não encontrado.');
                return;
            }
            alert(`${data.logradouro}, ${data.complemento} - ${data.bairro} - ${data.localidade}/${data.uf}`);
        })
        .catch(error => console.error('Falha na requisição:', error));
});
