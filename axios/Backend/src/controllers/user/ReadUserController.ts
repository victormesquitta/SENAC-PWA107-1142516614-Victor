import { Request, response, Response } from "express";
import { ReadUserService } from '../../services/user/ReadUserService';
class ReadUserController {
    async handle(req: Request, res: Response) {
        const { nmuser } = req.body

        const readUserService = new ReadUserService();
        const user = await readUserService.execute(
            {
                nmuser 
            }
        );
//
        return res.json(user);
    //return res.json({"ok":true})
    }
}
export { ReadUserController }