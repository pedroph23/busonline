import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  public linha: string = '';
  public linhas: Object[];
  public zoom: number = 15;
  public lat: number;
  public lng: number;
  public makBus: any;
  public markers: marker[];

  constructor(private service: AppService) { }
   

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

  public getBus() {
    this.userLocation();
    // setInterval(() => {
    //   this.service.getBus(this.linha).subscribe(res => {
    //     this.linhas = res.features;
    //   })
    // }, 10000)
    this.service.exemplo(this.linha).subscribe(a => {
      console.log(a);
      this.linhas = a.features;
    })
  }

  private userLocation() {
    navigator.geolocation.watchPosition((position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    });
  }
}




// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
