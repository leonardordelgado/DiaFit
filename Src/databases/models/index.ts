// main.js
import DbUser from "../DbUser";
import User from "./users";
import InfoUser from "./InforUser";
import './associations'; // Importando as associações

const Db = new DbUser();

export default (async () => {
    try {
        // Sincroniza todos os models definidos
        await Db.getSequelize().sync();
        console.log('Tabelas criadas com sucesso.');
    } catch (error) {
        console.error('Erro ao criar tabelas:', error);
    }
})();