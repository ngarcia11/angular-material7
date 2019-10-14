import { Component, OnInit} from '@angular/core';
import {PhotosService} from './services/photos.service';
import { Subscriber } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Photo } from './models/photos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  photos: Photo[] = [];
  albumId = [1, 2, 3];
 constructor(public photosService: PhotosService) {}

ngOnInit() {
 this.photosService.getPhotos()
 // tslint:disable-next-line: align
  .subscribe(
  photos => {
    console.log(photos);
    this.photos = photos;
  },
  err => {
    console.log(err);
  }
 );
}

}
