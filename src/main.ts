import { Controller, Module, Get } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

type Username = {
    name: string,
    age: number
}

/*
 * Controller = handles incoming request
 */

@Controller() //decorators
class AppController {

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

/*
 * Modules = Groups together code
 */

@Module({
    controllers: [AppController]
})
class AppModule { }

/*
 * 
 */

async function bootstrap() {

    const app = await NestFactory.create(AppModule)
    app.listen(3030)
    
}

// start the app
bootstrap()
