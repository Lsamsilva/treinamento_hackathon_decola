import { Component, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogPost : BlogPostModel;

  constructor() {
    this.blogPost = new BlogPostModel();

    this.blogPost.titulo = 'Primeira Postagem!!!';
    this.blogPost.imagem = 'https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png'
    this.blogPost.texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero perspiciatis aspernatur quia eligendi quod odio doloremque alias dolores, obcaecati at repellat, nemo voluptatibus dicta veritatis. Perspiciatis dignissimos ducimus error!'

  }

  ngOnInit(): void {
  }

}
