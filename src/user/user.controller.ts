import { Controller, HttpCode, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @HttpCode(200)
  @Post('auth')
  login(@Body() createUserDto: CreateUserDto) {
    console.log("data na auth => ", createUserDto)
    return this.userService.find(createUserDto);
  }

}
