import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileModule } from './profile/profile.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ProfileModule,
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
