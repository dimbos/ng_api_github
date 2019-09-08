import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ToolbarComponent} from './component/toolbar/toolbar.component';
import {SearchComponent} from './component/search/search.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpModule} from '@angular/http';
import {UsersService} from './users.service';


@NgModule({
    imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule, HttpModule],
    declarations: [AppComponent, ToolbarComponent, SearchComponent],
    providers: [UsersService],
    bootstrap: [AppComponent]
})

export class AppModule { }