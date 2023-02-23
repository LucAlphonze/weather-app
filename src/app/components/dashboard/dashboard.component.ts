import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  urlImg = '../../../assets/dia-lluvioso.png';
  ciudad: string = '';
  query: boolean = false;
  loading: boolean = false;
  mostrarError: boolean = false;
  temperatura!: number;
  humedad!: number;
  clima!: number;

  constructor(private _climaService: ClimaService) {}
  obtenerClima() {
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(
      (data) => {
        this.loading = false;
        this.query = true;
        this.temperatura = data.main.temp - 273;
        this.humedad = data.main.humidity;
        this.clima = data.weather[0].main;
      },
      (error) => {
        console.log(error);
        this.loading = false;
        this.error();
      }
    );
  }

  error() {
    this.mostrarError = true;
    setTimeout(() => {
      this.mostrarError = false;
      this.ciudad = '';
    }, 3000);
  }
}
