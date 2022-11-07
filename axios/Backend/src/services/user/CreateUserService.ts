import prismaClient from '../../prisma';


interface UserRequest {
    nmuser: string;
    senha: string;
    perfil: string;
}
class CreateUserService {
    async execute({ nmuser, senha, perfil }: UserRequest) {
        //vamos verificar se enviou Usename
        if (!nmuser) {
            throw new Error("Nome do usuario deve ser informado")
        }
        //verifica usuario ja foi cadastrado anteriormente
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                nomeUser: nmuser
            }
        })
        if (userAlreadyExists){
            throw new Error("usuario já existe no DB User")
        }
        const user = await prismaClient.user.create({
            data:{
                nomeUser:nmuser,
                senha:senha,
                perfilUser:perfil,
            }
        })
        return user;
    }
}
export { CreateUserService }