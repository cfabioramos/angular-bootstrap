import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessagePocComponent } from './message-poc/message-poc.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { FileSelectDirective } from 'ng2-file-upload';

const appRoutes: Routes = [{ path: 'message', component: MessagePocComponent },
{ path: 'new-message', component: MessageFormComponent }];

@NgModule( {
    declarations: [
        AppComponent,
        FileSelectDirective,
        HeaderComponent,
        FooterComponent,
        MessagePocComponent,
        MessageFormComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
} )

export class AppModule { }
