import { IsNotEmpty, IsString, Length } from 'class-validator';

export class AddUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 10)
  password: string;
}
