import { Controller, Get } from '@nestjs/common';

type Username = {
    name: string,
    age: number
}

/*
 * Controller = handles incoming request
 */

@Controller() //decorators
export class AppController {

    text: string
    num: number
    arr: Username[]

    @Get()
    getRootRoute(){

        //
        this.text = 'hello world'
        this.num = 23
        this.arr = [{name:'stephen', age:20}]

        //
        const title: string = 'hi there'
        const data: string[] = this.arr.map(item => item.name + item.age)

        //
        const response: object = { 
            text: this.text,
            num: this.num,
            title,
            data
        }

        return response

    }

}