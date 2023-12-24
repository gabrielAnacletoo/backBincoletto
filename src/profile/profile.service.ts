import { Injectable, ConflictException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProfileDocument } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel('Profile')
    private readonly ModelProfile: Model<ProfileDocument>,
  ) {}

  async create(createProfileDto: CreateProfileDto) {
    console.log("createProfileDto", createProfileDto)

    try {
      const existingUser = await this.ModelProfile.findOne({ email: createProfileDto.email });

      console.log("existe usuario", existingUser)
      if (existingUser) {
        throw new ConflictException('E-mail already exists');
      }

      const saveProfile = await this.ModelProfile.create(createProfileDto);
      
      return saveProfile;
    } catch (error) {
      console.log('Erro detalhado', error);
      throw error; // Se não for a exceção de e-mail duplicado, propague o erro
    }
  }

 async findAll() {
    return await this.ModelProfile.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  async remove(id: string) {
    try {
      const deletedUser = await this.ModelProfile.findByIdAndDelete(id);

      if (!deletedUser) {
        return { message: `Usuário com ID ${id} não encontrado. Nenhum usuário excluído.`, users: [] };
      }

      const updatedUsers = await this.ModelProfile.find();
      return { message: `Usuário com ID ${id} excluído com sucesso.`, users: updatedUsers };
    } catch (error) {
      console.log('Erro ao excluir usuário', error);
      throw error;
    }
  }
}
