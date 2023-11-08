import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class LoginDto{
    @IsNotEmpty()
    @IsString({ message: 'Please enter correct username'})
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

}