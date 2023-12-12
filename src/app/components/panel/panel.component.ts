import {Component} from '@angular/core';
import {RecuadroComponent} from "../recuadro/recuadro.component";

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    RecuadroComponent
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {
  cabeceras: string[] = ["Nº", "Alumno"];
  datosDAM: any[] = [
    {"Nº": "1", "Alumno": "Daniel Andela Lopez"},
    {"Nº": "2", "Alumno": "Jose Maria Dorado Ruiz"},
    {"Nº": "3", "Alumno": "Natalia Cano Lopez"}
  ]
  textoboton: string = "Consultar"
  tituloDAM: string = "Alumnos DAM"

  datosDAW: any[] = [
    {"Nº": "1", "Alumno": "Maria Muñoz Lopoz"},
    {"Nº": "2", "Alumno": "Jose Rodriguez Martin"},
    {"Nº": "3", "Alumno": "Lucia Sanchez Arribas"}
  ]
  tituloDAW: string = "Alumnos DAW"

  datosASIR: any[] = [
    {"Nº": "1", "Alumno": "Alejandro Galan Lopoz"},
    {"Nº": "2", "Alumno": "Jose Maria Dorado Ruiz"},
    {"Nº": "3", "Alumno": "Arturo Carrasco Perez"}
  ]
  tituloASIR: string = "Alumnos ASIR"

  datosSMR: any[] = [
    {"Nº": "1", "Alumno": "Natalia Cano Lopez"},
    {"Nº": "2", "Alumno": "Jose Maria Dorado Ruiz"},
    {"Nº": "3", "Alumno": "Alejandro Galan Lopoz"}
  ]
  tituloSMR: string = "Alumnos SMR"

}
