import { Component } from '@angular/core';
import { BlogModel } from '../models/blog.model';

@Component({
    selector: 'app-body',
    templateUrl: 'app/components/body.component.html'
})

export class BodyComponent {
    blog: BlogModel;

    constructor() {
        this.blog = new BlogModel();
    }
}



