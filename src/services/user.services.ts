
import { NotFoundError } from "../errors/not-found.error";
import { User } from "../models/users.model";
import { UserRepository } from "../repositories/user.repository";

export class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAll(): Promise<User[]> {
        return await this.userRepository.getAll();
    }

    async getById(id: string): Promise<User> {
        const user = await this.userRepository.getById(id);
        if (user) {
            return user;
        } else {
            throw new NotFoundError("Usuário não encontrado");
        }
    }

    async deleteById(id: string) {
        this.userRepository.deleteById(id);
    }

    async putById(id: string, user: User) {
        const _user = await this.userRepository.getById(id);
        if (!_user) {
            throw new NotFoundError("Usuário não encontrado");
        }
        _user.nome = user.nome;
        _user.email = user.email;
        this.userRepository.putById(_user);    
    }

    async post(user: User) {
        this.userRepository.post(user);
    }

}