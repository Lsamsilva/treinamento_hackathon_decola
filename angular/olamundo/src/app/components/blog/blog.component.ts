import { Component, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public blogPosts : Array<BlogPostModel>;

  constructor() {

    this.blogPosts = [];

    const post = new BlogPostModel(); //criação do objeto como constante pois ele não irá mudar, depois coloca as info
    post.titulo = 'Primeira postagem!'
    post.imagem = 'https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png'
    post.texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero perspiciatis aspernatur quia eligendi quod odio doloremque alias dolores, obcaecati at repellat, nemo voluptatibus dicta veritatis. Perspiciatis dignissimos ducimus error!';
    this.blogPosts.push(post); 

    const post2 = new BlogPostModel();
    post2.titulo = 'Segunda postagem!';
    post2.imagem = 'https://blog.cenatcursos.com.br/wp-content/uploads/2020/08/blog-sobre-saude-mental.jpg';
    post2.texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero perspiciatis aspernatur quia eligendi quod odio doloremque alias dolores, obcaecati at repellat, nemo voluptatibus dicta veritatis. Perspiciatis dignissimos ducimus error!';
    this.blogPosts.push(post2);

    const post3 = new BlogPostModel();
    post3.titulo = 'Terceira Postagem!'
    post3.imagem = 'https://blog.hotmart.com/blog/2017/09/criar-um-blog.png';
    post3.texto = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero perspiciatis aspernatur quia eligendi quod odio doloremque alias dolores, obcaecati at repellat, nemo voluptatibus dicta veritatis. Perspiciatis dignissimos ducimus error!';
    this.blogPosts.push(post3);

  }

  ngOnInit(): void {
  }

}
