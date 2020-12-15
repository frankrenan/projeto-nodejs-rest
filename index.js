const customExpress = require('./config/customExpress');
const conexao = require('./database/conexao');

conexao.connect(error => {
    if (error) {
        console.log(error)
    } else {
        console.log('rodando com sucesso');

        const app = customExpress();

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});


