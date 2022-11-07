import { json } from 'express';
import prismaClient from '../../prisma';


interface UserRequest {
    nmuser: string;
    
}
class ReadUserService {
        async execute({ nmuser  }: UserRequest) {
            //nmuser="Adalberto Piotto"
            console.log(nmuser)
        //vamos verificar se enviou Usename
        console.log("leitura...1")
        if (!nmuser) {
            console.log("leitura...2")
            return null
           // throw new Error("Nome do usuario deve ser informado")
        }
        console.log("leitura...3")
        //verifica usuario ja foi cadastrado anteriormente
        const user = await prismaClient.user.findFirst({
            where: {
                nomeUser: nmuser
            }
        })
        console.log("leitura...4")
            return user;
        
    }
}
export { ReadUserService }