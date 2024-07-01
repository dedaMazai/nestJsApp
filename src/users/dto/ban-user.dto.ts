import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class BanUserDto {
    @ApiProperty({example: 1, description: 'Id пользователя'})
    @IsNumber(
        {
            allowNaN: false,
            allowInfinity: false,
        },
        {message: 'Должно быть числом'}
    )
    readonly userId: number;
    @ApiProperty({example: 'Не корректно выражался', description: 'Причина блокировки'})
    @IsString({message: 'Должно быть строкой'})
    readonly banReason: string;
}
