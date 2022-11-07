import { Request, response, Response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService';
class CreateUserController {
    async handle(req: Request, res: Response) {
        const { nmuser, senha, perfil } = req.body

        const createUserService = new CreateUserService();
        const user = await createUserService.execute(
            {
                nmuser, senha, perfil
            }
        );

        return res.json(user);
    }
}
export { CreateUserController }