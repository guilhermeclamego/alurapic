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
  filter: string = '';

  constructor(private activatedRoute: ActivatedRoute){ }

  ngOnInit(): void {

    //do app.routing.module.ts, para definir dinamicamente o userName
    //const userName = this.activatedRoute.snapshot.params.userName 
    this.photos = this.activatedRoute.snapshot.data['photos'];
   
  }
}
