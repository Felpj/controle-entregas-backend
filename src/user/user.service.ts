import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {

    private users: UserEntity[] = [];

    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        const user: UserEntity = {
            ...createUserDto,
            id: this.users.length + 1,
            password: passwordHashed,
        };

        this.users.push(user);

        return user;
    }

    async getAlUser(): Promise<UserEntity[]> {
        return this.users;
      }
}
