import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dtos/create-Cat-dto';

@Controller('cats')

export class CatsController {
    constructor(private readonly   catsService:CatsService){}
       
        @Get()
        Get(){
          
            return this.catsService.getCats()
        }

        @Post()
         cretateCat(@Body() createcat:CatDto){
            return this.catsService.CreateCat(createcat)
         }

         @Put("/:id")
         Update(@Param("id") id:string,@Body() updateCat:Partial<CatDto>){
            return  this.catsService.updateCat(Number(id),updateCat)
         }
         @Delete("/:id")
         deletandoCat(@Param("id") id: string) {
             console.log("ID recebido:", id); // Adiciona log para verificar o ID
             return this.catsService.DeleteCat(Number(id));
         }
         
         
}
