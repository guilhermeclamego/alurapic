import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute    
  ){ }

  ngOnInit(): void {

    //do app.routing.module.ts, para definir dinamicamente o userName
    const userName = this.activatedRoute.snapshot.params.userName 

    this.photoService.
      listFromUser(userName)
      .subscribe( photos => {
        //console.log(photos[0].description)
        this.photos = photos                    
      });  
  }
}
