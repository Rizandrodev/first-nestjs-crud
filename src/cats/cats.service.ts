import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Cat } from './interface/cats.interface';
import { CatDto } from './dtos/create-Cat-dto';

@Injectable()
export class CatsService {
    private cats:Cat[]=[]
    getCats(){
        console.log("gatos actuais",this.cats)
    return this.cats;
    }

    CreateCat(createCatdto: CatDto) {
        const fincat = this.cats.find((cat) => cat.name === createCatdto.name);
        if (fincat) throw new HttpException("Cat already exists", HttpStatus.NOT_FOUND);
    
        const newCat = {
            id:this.cats.length+1,  
            ...createCatdto
        };
        
        this.cats.push(newCat);
        return newCat;
    }
    

    updateCat(id:number,updateCat:Partial<Cat>){
        const catIndex=this.cats.findIndex((index)=>index.id===id)
        if(catIndex<0) throw new HttpException("Cat not found",HttpStatus.BAD_REQUEST)
            this.cats[catIndex]={
                ...this.cats[catIndex],
                ...updateCat
            }
            return this.cats;
        }

        DeleteCat(id: number) {
            console.log("Tentando deletar o gato com ID:", id);
            console.log("Gatos atuais:", this.cats); // Log para ver os gatos
            
            const catIndex = this.cats.findIndex((cat) => cat.id === id);
            if (catIndex < 0) {
                console.log("Gato não encontrado!");
                throw new HttpException("Cat not found", HttpStatus.BAD_REQUEST);
            }
            
            this.cats.splice(catIndex, 1);
            console.log("Gato deletado com sucesso!");
            return { message: 'Cat deleted successfully' };
        }
        
        
        

    
}
