import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TagService } from "./tag.service";
import { CreateTagDto } from "./dto/create-tag.dto";

@Controller("tags")

export class TagController {
    constructor(private readonly TagService:TagService){}
    @Get()
        findAll():string[]{
        return this.TagService.findAll()
        }
    
    @Get(':id')
     findOne(@Param(':id') id:string):string{
    return this.TagService.findOne(id)
    }
    @Post()
    createTag(@Body() createTagDto:CreateTagDto)
    {
        return this.TagService.postTag(createTagDto.title)
    }
    @Delete()
    delete(@Body() createTagDto:CreateTagDto){
return this.TagService.delete(createTagDto.title)
    }
}
