import { Component, OnInit } from "@angular/core";
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
import { ActivatedRoute } from "@angular/router";
import { ItemEventData } from "ui/list-view"
import { Page } from "ui/page";
import { ios } from "application";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public imageTaken: ImageAsset;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = false;
    public width: number = 0;
    public height: number = 0;
    public res: string = "";


    constructor(private route: ActivatedRoute) {
        this.route.queryParams.subscribe(params => {
      console.log(params['message']);
      this.res = params['message'];
          });
    }

    ngOnInit(): void {
        this.onRequestPermissions();
        this.onCheckForCamera();
    }

    onTakePhoto() {
        let options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
    
        takePicture(options)
            .then(imageAsset => {
                this.imageTaken = imageAsset;
               //console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            }).catch(err => {
                console.log(err.message);
            });
    }

     // >> camera-module-perm-code
     onRequestPermissions() {
        requestPermissions();
    }
    // << camera-module-perm-code

    // >> camera-module-avai-code
    onCheckForCamera() {
        let isCameraAvailable = isAvailable();
        //console.log("Is camera hardware available: " + isCameraAvailable);
    }
    // << camera-module-avai-code

    tabSelected(args: number) {
        console.log("tab selected: " + args);
    }
   
    
    
}
