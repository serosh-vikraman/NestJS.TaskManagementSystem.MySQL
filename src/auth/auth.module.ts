import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User } from './user.entity';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), // Import the User entity
    PassportModule.register({ defaultStrategy: 'jwt' }), // Configure Passport with JWT strategy
    JwtModule.register({
      secret: 'yourSecretKey', // Use a strong secret key
      signOptions: { expiresIn: '1h' }, // Token expiration
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],  // Exporting modules for use in other modules
})
export class AuthModule {}
