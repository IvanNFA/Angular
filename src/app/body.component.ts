import { Component } from '@angular/core';
import { blogModel } from './models/index';

@Component({
    selector:'app-body',
    templateUrl: 'app/body.component.html'
})

export class BodyComponent{
    blog : blogModel

    constructor(){
        this.blog = new blogModel();
    }


}



