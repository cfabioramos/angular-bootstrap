import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessagePocComponent } from './message-poc/message-poc.component';
import { MessageFormComponent } from './message-form/message-form.component';

const appRoutes: Routes = [{ path: 'message', component: MessagePocComponent },
{ path: 'new-message', component: MessageFormComponent }];

@NgModule( {
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        MessagePocComponent,
        MessageFormComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
} )

export class AppModule { }
