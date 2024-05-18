/*import User from "../models/users";
import InfoUser from "../models/InforUser";

async function teste() {
  try {
    // Criando um usuário
    const user = await User.create({
      Nome: 'João',
      SobreNome: 'Silva',
      Senha: 'senhaSegura123',
      Email: 'joao.silva@example.com'
    });

    // Criando uma informação de usuário relacionada ao usuário criado
    const infoUser = await InfoUser.create({
      Apelido: 'Jo',
      Genero: 'Masculino',
      Altura: '180 cm',
      Peso: '75 kg',
      Idade: '30',
      userId: user.getDataValue('id')
    });

    // Consultando a informação do usuário e incluindo o usuário associado
    const iuser = await InfoUser.findOne({
      where: { id: 1 },
      include: [{ model: User, as: 'userInfo' }] // Usando o alias correto 'userInfo'
    });

    console.log(JSON.stringify(iuser, null, 2));
  } catch (error) {
    console.error('Erro ao executar o teste:', error);
  }
}
export default teste*/
