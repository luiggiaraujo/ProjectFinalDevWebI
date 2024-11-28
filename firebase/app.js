document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    const db = firebase.firestore();

    const refeicaoRef = db.collection('refeicoes');

    refeicaoRef.get()
        .then(refeicoes => {
            refeicoes.forEach(doc => {
                const data = doc.data();
                document.write(`${data.nome} (ID: ${data.id_refeicao})<br>`);
            });
        })
        .catch(error => {
            console.error("Erro ao buscar as refeições: ", error);
        });

        const usuariosRef = db.collection('usuarios').doc('2');
        usuariosRef.get()
            .then(doc => {
                if (doc.exists) {
                    const data = doc.data();
                    document.write(`Usuário xx: ${data.Nome}<br>`);
                } else {
                    console.log("Nenhum documento encontrado.");
                }
            })
            .catch(error => {
                console.error("Erro ao buscar o usuário: ", error);
            });



});