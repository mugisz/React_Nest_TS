import { Injectable } from "@nestjs/common";
import { CreateTagDto } from "./dto/create-tag.dto";


@Injectable(

)
export class TagService{
    private allTag = []
    findAll():string[]{
        return this.allTag
    }
    findOne(id:string):string{
        return this.allTag.find(tag=>tag.id === id)
    }
    postTag(title:string){
        return this.allTag.push({
            
            title
        })
    }
    delete(title:string){
      return this.allTag.filter(tag=>tag.title == title)
    }
}