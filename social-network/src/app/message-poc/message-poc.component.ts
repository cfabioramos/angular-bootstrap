import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const folderImagePath = 'assets/img/';

@Component({
  selector: 'app-message-poc',
  templateUrl: './message-poc.component.html',
  styleUrls: ['./message-poc.component.css']
})
export class MessagePocComponent implements OnInit {
    
    private mainImgUrl: string = folderImagePath + 'photo-1544621059634..jpg';
    private uploadImageUrl: string = 'http://localhost:3000/api/upload';

    public uploader: FileUploader = 
        new FileUploader({url: this.uploadImageUrl, itemAlias: 'photo'});

    constructor() { 
        
    }

    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
             console.log('ImageUpload:uploaded:', item);
             console.log('Status: ', status);
             console.log('Response: ', response);
             let jsonResponse = JSON.parse(response);
             this.mainImgUrl = folderImagePath + jsonResponse.imageName;
         };
    }
    
    uploadImage() {
        
        console.log(this.uploader);
        
        this.uploadImageUrl += '?imageName=testeImg.jpg';
        
        // Update uploader URL
        this.uploader.setOptions({ url: this.uploadImageUrl });
        
        this.uploader.uploadAll();
        
        // Clear the item queue
        //this.uploader.clearQueue();
    }

}
