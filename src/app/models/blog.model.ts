import { postModel } from './post.model';


export class blogModel {
    titulo : string;
    posts: postModel[];

    constructor(){
        this.titulo = "Ivan blog";
        this.posts = POSTS;
    }
}

   const POSTS: postModel[] = [
      { 
          titulo : "Titulo 1",
          autor : "Ivan",
          fecha : "2016-01-05",
          texto : "texto de la noticia"
      },
      { 
          titulo : "Titulo 2",
          autor : "Iria",
          fecha : "2016-02-13",
          texto : "texto de la noticia"
      },
      { 
          titulo : "Los tiris viven libres en el campo",
          autor : "Ivan",
          fecha : "2016-03-25",
          texto : "Los tiris viven libres en el campo Los tiris viven libres en el campo Los tiris viven libres en el campo"
      }
    ];