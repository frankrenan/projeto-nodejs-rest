const conexao = require('../database/conexao')

class Atendimento {

    adiciona(atendimento){
        const sql = 'INSERT INTO atendimentos SET ?';

        conexao.query(sql, atendimento, (erro, resultados )=> {
            if (erro){
                console.log(erro);
            }
            else{
                console.log(resultados);
            }
        })

    }

}

module.exports = new Atendimento;