document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();

    const db = firebase.firestore();

    // Listener em tempo real para a coleção 'refeicoes'
    const refeicaoRef = db.collection('refeicoes');
    refeicaoRef.onSnapshot(snapshot => {
        snapshot.forEach(doc => {
            const data = doc.data();
            document.write(`${data.nome} ([ID]: ${data.id_refeicao})<br>`);
        });
    }, error => {
        console.error("Erro ao buscar as refeições: ", error);
    });

    // Listener em tempo real para o documento específico na coleção 'usuarios'
    const usuariosRef = db.collection('usuarios').doc('2');
    usuariosRef.onSnapshot(doc => {
        if (doc.exists) {
            const data = doc.data();
            document.write(`Usuário: ${data.Nome}<br>`);
        } else {
            console.log("Nenhum documento encontrado.");
        }
    }, error => {
        console.error("Erro ao buscar o usuário: ", error);
    });

});
