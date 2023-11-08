import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignUpDto{
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsString({ message: 'Please enter your username'})
    readonly username: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;

}