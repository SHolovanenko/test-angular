import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './app.post';
import { environment } from '../environments/environment';

@Injectable()
export class PostsService {

    posts: Array<Post> = [];

    constructor(private http: HttpClient) {
        //
    }

    getPosts() : Array<Post> {
        let url = 'https://gorest.co.in/public-api/posts';
        let options = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + environment.access_token
            })
        };

        this.http.get(url, options).subscribe((response) => {
            response['result'].forEach(element => {
                var post = new Post();
                post.title = element.title;
                post.body = element.body;

                this.posts.push(post);
            });
        });

        return this.posts;
    }
}