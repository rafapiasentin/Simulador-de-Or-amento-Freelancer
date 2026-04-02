const botoesContratar = document.querySelectorAll('.contratar');
const listaOrcamentos = document.getElementById('lista-de-orcamentos');
const totalElemento = document.getElementById('total');
const botaoFinalizar = document.getElementById('finalizar-orcamento');

let total = 0;

function atualizarTotal() {
    totalElemento.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
}

botoesContratar.forEach((botao) => {
    botao.addEventListener("click", () => {

        const produto = botao.parentElement;

        const nome = produto.querySelector("h3").textContent;

        const preco = parseFloat(
            produto.querySelector('.preco').textContent
                .replace("R$", "")
                .replace(".", "")
                .replace(",", ".")
        );

        const itemOrcamento = document.createElement('li');
        itemOrcamento.style.marginBottom = "10px";

        const textoItem = document.createElement('span');
        textoItem.textContent = `${nome} - R$ ${preco.toFixed(2).replace(".", ",")}`;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = "Remover";
        botaoRemover.style.marginLeft = "10px";
        botaoRemover.style.backgroundColor = "#ff4d4d";
        botaoRemover.style.color = "#fff";
        botaoRemover.style.border = "none";
        botaoRemover.style.padding = "5px 10px";
        botaoRemover.style.borderRadius = "5px";
        botaoRemover.style.cursor = "pointer";

        botaoRemover.addEventListener("click", () => {
            listaOrcamentos.removeChild(itemOrcamento);
            total -= preco;
            atualizarTotal();
        });

        itemOrcamento.appendChild(textoItem);
        itemOrcamento.appendChild(botaoRemover);

        listaOrcamentos.appendChild(itemOrcamento);

        total += preco;

        atualizarTotal();
    });
});

botaoFinalizar.addEventListener("click", () => {
    if (total === 0) {
        alert("Você ainda não selecionou nenhum serviço.");
    } else {
        alert(`Orçamento finalizado com sucesso!\nValor total: R$ ${total.toFixed(2).replace(".", ",")}`);
    }
});