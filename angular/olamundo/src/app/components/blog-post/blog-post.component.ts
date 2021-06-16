import { Component, Input, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})

export class BlogPostComponent implements OnInit {

  @Input()
  public post : BlogPostModel = new BlogPostModel();

  constructor() {}

  ngOnInit(): void {}

  compartilhar(): void{ //void é o tipo de retorno poderia ser number/string
    //execute o que quiser aqui
    //lembre-se que você pode alterar as variáveis locais
    alert('Post '+this.post?.titulo+ ' compartilhado!');
  }

}
