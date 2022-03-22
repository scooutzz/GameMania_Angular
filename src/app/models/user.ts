export class UserCadastro {
    constructor(
        public nome: string,
        public telefone: string,
        public email: string,
        public senha: string,
    ) {}
}
export class UserLogin {
    constructor(
        public email: string,
        public senha: string,
    ) {}
}
