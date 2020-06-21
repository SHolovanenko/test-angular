import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './app.post';
import { PostsService } from './app.postSrvice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostsService]
})

export class AppComponent implements OnInit {
  posts: Array<Post>;

  constructor(private postService: PostsService) {
    //
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
