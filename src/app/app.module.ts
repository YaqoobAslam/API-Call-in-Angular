import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersDataService } from '../users-data.service';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [UsersDataService],
  declarations: [AppComponent, FooterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
