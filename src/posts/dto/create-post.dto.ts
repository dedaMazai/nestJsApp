import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePostDto {
    @ApiProperty({example: 'Заголовок', description: 'Заголовок поста'})
    @IsString({message: "Должно быть строкой"})
    readonly title: string;
    @ApiProperty({example: 'Контент', description: 'Контент поста'})
    @IsString({message: "Должно быть строкой"})
    readonly content: string;
    @ApiProperty({example: 1, description: 'Id пользователя'})
    @IsNumber({}, {message: "Должно быть строкой"})
    readonly userId: number;
}
