import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MailService } from '../services/mail.service';
import { IMail } from '../interfaces/mail';

@Component({
  selector: 'app-mail-details',
  templateUrl: './mail-details.component.html',
  styleUrls: ['./mail-details.component.css']
})
export class MailDetailsComponent implements OnInit {
  mail: IMail;
  errorMessage: string;
  constructor(private _route: ActivatedRoute,private _mailService: MailService) { }

  ngOnInit() {
    let id = this._route.snapshot.params.msgId;
    this._mailService.getMails().subscribe(mails => {
      this.mail = mails.filter(x=>(x["msgId"]==id))[0];
    },
    error => this.errorMessage = <any>error)    
  }

}
