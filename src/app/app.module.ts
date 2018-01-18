import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MailComponent } from './components/mail.component';
import { MailService } from './services/mail.service';
import { HttpClientModule } from '@angular/common/http';
import { MailDetailsComponent } from './components/mail-details.component';
import { routing } from './app.routing';



@NgModule({
  declarations: [
    AppComponent,
    MailComponent,
    MailDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
