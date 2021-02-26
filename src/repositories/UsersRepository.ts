import { EntityRepository, Repository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User) //Define que UserRepository vai ser um repository.
class UsersRepository extends Repository<User> {}

export { UsersRepository }