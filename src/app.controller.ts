import { Controller, Get, Param } from '@nestjs/common';

type Username = {
    name: string,
    age: number
}

/*
 * Controller = handles incoming request
 */

@Controller('/api') //decorators
export class AppController {

    text: string
    num: number
    arr: Username[]

    @Get('/name/:nama')
    getByName(@Param('nama') nama: string): object{

        //
        this.text = 'hello world'
        this.num = 23
        this.arr = [{name:'stephen', age:20}]

        //
        const title: string = 'hi there'
        const data: string[] = this.arr.map(item => item.name + item.age)

        let response: object;
 
        (nama === 'imam') ? response = { data } : response = { title }

        return response

    }

    @Get('/filter')
    getByFilter(): string{

        const filter: string = 'Hi Filter'

        return filter
    }

    @Get('/number')
    async getByNumber(){

        let data: number[] = []

        for(let i = 1; i < 100000; i++){
            data.push(i)
        }

        return await data
    }

}