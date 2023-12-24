import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('Users')
    private readonly UserModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newuser = this.UserModel.create(createUserDto);
      return newuser;
    } catch (error) {
      console.log('Erro detalhado', error);
      throw error;
    }
  }

  async find(createUserDto: CreateUserDto) {
    try {
      const verify = await this.UserModel.find({ email: createUserDto.email });
      if(verify) {
        return {verificado: verify, registered: true}
      } else {
        return {verificado: verify, registered: false}
      }
    } catch (error) {
      console.log('Erro detalhado', error);
      throw error;
    }
  }


}
