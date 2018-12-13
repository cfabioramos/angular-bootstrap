import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const urlFileSystem = 'http://localhost:3000/';

@Component({
  selector: 'app-message-poc',
  templateUrl: './message-poc.component.html',
  styleUrls: ['./message-poc.component.css']
})
export class MessagePocComponent implements OnInit {
    
    private mainImgUrl: string = urlFileSystem;
    private uploadImageUrl: string = urlFileSystem + 'api/upload';

    public uploader: FileUploader = 
        new FileUploader({url: this.uploadImageUrl, itemAlias: 'photo'});

    constructor() { 
        this.mainImgUrl += 'base/' + this.getRandomInt(1, 5) + '.jpg';
    }

    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
//             console.log('ImageUpload:uploaded:', item);
//             console.log('Status: ', status);
//             console.log('Response: ', response);
             let jsonResponse = JSON.parse(response);
             this.mainImgUrl = urlFileSystem + jsonResponse.imageName;
         };
    }
    
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    uploadImage() {
        // Update uploader URL
        this.uploader.setOptions({ url: this.uploadImageUrl });
        
        this.uploader.uploadAll();
        // Clear the item queue
        // this.uploader.clearQueue();
    }

}
