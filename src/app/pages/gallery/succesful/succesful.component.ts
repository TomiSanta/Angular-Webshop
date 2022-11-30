import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-succesful',
  templateUrl: './succesful.component.html',
  styleUrls: ['./succesful.component.scss']
})
export class SuccesfulComponent implements OnInit {

  userId: string = '';

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.userId = param.userId as string;
    })
  }

}
