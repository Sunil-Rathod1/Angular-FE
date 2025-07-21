import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import { PostsService } from '../../services/posts-service';

@Component({
  selector: 'app-post-component',
  imports: [
    CommonModule,
    CardModule,
    TableModule,
    ButtonModule,
    Navbar,
    FormsModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    CheckboxModule,
  ],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css',
})
export class PostComponent {
  title = '';
  content = '';
  image = '';
  category = '';
  tags: string[] = [];
  showDialog = false;
  published = false;
  posts: any[] = [];
  categoryOptions: any;
  constructor(
    private postsService: PostsService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postsService.getPosts().subscribe({
      next: (data: any) => {
        this.posts = data;
        this.cd.detectChanges();
        console.log('Posts loaded:', this.posts);
      },
      error: (error) => {
        console.error('Error fetching posts:', error);
      },
    });
  }

  createPost() {
    const postData = {
      title: this.title,
      content: this.content,
    };

    this.postsService.createPost(postData).subscribe({
      next: (data) => {
        console.log('Post created:', data);
        this.loadPosts();
      },
      error: (error) => {
        console.error('Error creating post:', error);
      },
    });
    this.showDialog = false;
    this.title = '';
    this.content = '';
  }

  deletePost(id: string) {}
  editPost(id: string) {}
}
