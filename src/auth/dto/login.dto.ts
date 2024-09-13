import { IsNotEmpty, IsString, Length } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 40)
  userNameOrPhoneNumber: string;
  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  password: string;
  @IsNotEmpty()
  @IsString()
  userAgent: string;
}
