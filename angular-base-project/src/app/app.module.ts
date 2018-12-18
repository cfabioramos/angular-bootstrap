import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CasaFinaArquiteturaComponent } from './casa-fina-arquitetura/casa-fina-arquitetura.component';
import { TestDraggableComponent } from './test-draggable/test-draggable.component';

const appRoutes: Routes = [
                           { path: 'casafina-arquitetura', component: CasaFinaArquiteturaComponent },
                           { path: 'other-page', component: TestComponent },
                           { path: 'draggable-page', component: TestDraggableComponent }];

@NgModule( {
    declarations: [
        AppComponent,
        FileSelectDirective,
        TestComponent,
        CasaFinaArquiteturaComponent,
        TestDraggableComponent
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
