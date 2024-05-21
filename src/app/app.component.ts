import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import imglyRemoveBackground, {Config} from "@imgly/background-removal";
import * as customFabric from '../assets/scripts/fabric.min.js';
import { CustomFabric } from '../fabric';

const fabrics = customFabric.fabric as typeof  customFabric;
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('canvasEl') canvasEl!: ElementRef<HTMLCanvasElement>;
  canvas!: fabric.Canvas;

  title = 'test-fabric-17';
  url = "../assets/images/pop04889-65f0311def101.jpg"
  loading = false;
  // config: Config = {
  //   debug: true,
  //   model: "medium",
  //   output: {
  //     format: "image/webp",
  //     quality: 0.8
  //   },
  //   progress: (key, current, total) => {
  //     console.log(`Downloading ${key}: ${current} of ${total}`);
  //   }
  // };

  ngOnInit(): void {
    // this.generateImage();
  }
  
  ngAfterViewInit(): void {
    console.log(fabrics);
    this.canvas = new fabrics.Canvas(this.canvasEl.nativeElement);
    console.log(this.canvas); 
    this.canvas.setDimensions({ width: 500, height: 500 });


    this.canvas.isDrawingMode = true;
    this.canvas.freeDrawingBrush.color = 'red';
    this.canvas.freeDrawingBrush.width = 10;

    //erasing 

    const image = new fabrics.Image('../assets/images/img_the_scream.jpg', {
      width: 100,
      height: 100
    });

    this.canvas.add(image);
    this.canvas.renderAll();
  }
  
  toggleEreaser() {
    // this.canvas.isDrawingMode = !this.canvas.isDrawingMode;
    this.canvas.freeDrawingBrush = new fabrics.EraserBrush(this.canvas) as CustomFabric.BaseBrush;
    this.canvas.freeDrawingBrush.width = 10;
  }
  
  // generateImage() {
  //   // Start the timer
  //   const startTime = performance.now();
  
  //   this.urlToBlob(this.url)
  //     .then(blob => {
  //       if (blob) {
  //         const loadingTime = performance.now() - startTime;
  //         console.log('Blob created:', loadingTime, 'milliseconds');

  //       // Do something with the object URL, such as displaying the image
  //       const img = document.createElement('img');
  //       img.src = URL.createObjectURL(blob);
  //       document.body.appendChild(img);
  //         // Call imglyRemoveBackground with the blob
  //         return imglyRemoveBackground(blob, this.config);
  //       } else {
  //         throw new Error('Failed to fetch blob from URL.');
  //       }
  //     })
  //     .then(result => {
  //       // Convert the result blob to an image
  //       const loadingTime = performance.now() - startTime;
  //         console.log('background removed:', loadingTime, 'milliseconds');
  //       return this.blobToImage(result);
  //     })
  //     .then(image => {
  //       // Stop the timer
  //       const endTime = performance.now();
  //       const loadingTime = endTime - startTime;
  //       console.log('Image created:', image);
  //       console.log('Total Loading time:', loadingTime, 'milliseconds');
  
  //       // Do something with the image, such as appending it to the DOM
  //       console.log('Appending image to the document body...');
  //       document.body.appendChild(image);
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }



  async urlToBlob(url: string) {
    try {
      // Fetch the image data from the URL
      const response = await fetch(url);
      const blob = await response.blob();
      return blob;
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }

  blobToImage(blob: Blob): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          const img = new Image();
          img.onload = () => {
            resolve(img);
          };
          img.onerror = reject;
          img.src = reader.result as string;
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      } catch (error) {
        reject(error);
      }
    });
  }
}
