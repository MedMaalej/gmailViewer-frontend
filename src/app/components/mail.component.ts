import { Component, OnInit } from '@angular/core';
import { MailService } from '../services/mail.service';
import { IMail } from '../interfaces/mail';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  errorMessage: string;
  mails: IMail[];

  constructor(private _mailService: MailService) { }

  ngOnInit() {
    this._mailService.getMails().subscribe(mails => {
      this.mails = mails;
    },
      error => this.errorMessage = <any>error)
  }



}
