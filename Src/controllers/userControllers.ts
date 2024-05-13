import userServices from '../services/userServices';
import IUser from '../Interfaces/InterfaceUser';
class userControllers {
    async getUser(req, res){
        try {
            const users: IUser = await userServices.GetUserService();
            if(!users)  res.status(201).json({message: "Não existe usuarios na base de dados"});
            res.status(201).json(User)
        } catch (error) {
            res.status(404).json({ message: 'Erro ao buscar usuarios ', error: error.message });
        }
    }
    async getByIdUser(req, res){
        
    }
    async updateUser(req, res){
        
    }
    async insertUser(req, res){
        
    }
    async deleteUser(req, res){
        
    }
}

export default new userControllers;
