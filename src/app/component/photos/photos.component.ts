import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from 'src/app/models/photos';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  constructor(public photosServices: PhotosService) { }

  ngOnInit() {
    this.photosServices.getPhotos()
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
  something() { alert('Works!'); }
}
