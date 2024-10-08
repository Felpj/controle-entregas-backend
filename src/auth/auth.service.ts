import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserEntity } from 'src/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dtos/login.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { compare } from 'bcrypt';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
    ) {}

    async login(loginDto: LoginDto): Promise<ReturnLogin> {
        const user: UserEntity | undefined = await this.userService.findByEmail(
            loginDto.email).catch(() => undefined);
        
        const isMatch = await compare(loginDto.password, user?.password || '');

        if(!user || !isMatch) {
            throw new NotFoundException('Email ou senha invalida');
        }

        return {
            accesstoken: this.jwtService.sign({...new LoginPayload(user)}),
            user: new ReturnUserDto(user),
        } 
    }

}
