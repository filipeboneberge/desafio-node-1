# DESAFIO-1 NODE DEVCLUB<img src="https://github.com/filipeboneberge/Projeto-Responsivo-Easy-Shopping/blob/master/assets/img/logo-devclub.png?raw=true" width="50px" style="position: relative; top: 20px;">

🚀 Sobre o desafio
Crie uma aplicação que fará o <b>cadastro dos pedidos de uma hamburgueria</b>, e você deve utilizar <b>Node</b> e <b>Express</b>.

<b>Rotas POST /order</b>: A rota deve receber o pedido do cliente, o nome do cliente e o valor do pedido, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: <b> { id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" } </b>. Não se esqueça que o <b>ID</b> deve ser gerado por você, dentro do código <b>utilizando UUID V4</b>, assim que o pedido é criado, você deve sempre colocar o status como "Em preparação".

<b>GET /order</b>: Rota que lista todos os pedidos já feitos.

<b>PUT /order/</b>:id: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O id do pedido deve ser enviado nos parâmetros da rota.

<b>DELETE /order/</b>:id: Essa rota deve deletar um pedido já feito com o id enviado nos parâmetros da rota.

<b>GET /order/</b>:id: Essa rota recebe o id nos parâmetros e deve retornar um pedido específico.

<b>PATCH /order/</b>:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".

<b>Exemplo</b>: Se eu chamar a rota POST /order repassando { order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }, o array deve ficar assim:

[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
Se eu chamar a rota PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8, o array deve ficar assim:

[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
<br>
<br>
<b>Middlewares</b>
<br>
<br>
Crie um <b>middleware</b> que será utilizado em todas rotas que <b>recebem o parâmetro ID</b>, então ele deve <b>verificar se o ID passado existe</b>. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

Crie um <b>middleware</b> que é chamado em todas requisições que tenha um console.log que mostra o método da <b>requisiçao(GET,POST,PUT,DELETE, etc)</b> e também a <b>url da requisição</b>.

Exemplo
<b>[GET] - /order</b>

📅 Entrega
Após finalizar o desafio, suba o projeto para o seu github e compartilhe no Club, para todos verem que você conseguiu.

Feito com ♥ by Code Club - Rodolfo Mori
