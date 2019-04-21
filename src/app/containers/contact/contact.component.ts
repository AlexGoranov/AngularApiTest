import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private api: ApiService) {
    api.getPost(3).subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {
  }

}
