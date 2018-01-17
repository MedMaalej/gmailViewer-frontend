import { Injectable } from '@angular/core';
import { IMail } from '../interfaces/mail';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
@Injectable()
export class MailService {

  private _mailsUrl = 'http://localhost:8080/getMails';
  getMails(): Observable<IMail[]> {
    const paramsArray = [{
      "userMail": "mohamedmaalej.sde@gmail.com",
      "userPassword": "mohamedParis2018"
    },
    {
      "userMail": "maalejmedti@gmail.com",
      "userPassword": "#includeMeValley18"
    }
    ];
    const params = new HttpParams().set('jsonMailBoxes', JSON.stringify(paramsArray));
    return this._http.post<IMail[]>(this._mailsUrl, params)
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err);
    return Observable.throw(err.message);

  }

  constructor(private _http: HttpClient) { }

}
