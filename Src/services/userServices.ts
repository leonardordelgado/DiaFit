
class userServices {
    async GetUserService(){
        try {
           
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error; // Rejeita a promessa com o erro
        }
    }
}
export default new userServices;
