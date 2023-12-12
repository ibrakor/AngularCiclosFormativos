import {Component, Input} from '@angular/core';
import {TableComponent} from "../table/table.component";

@Component({
  selector: 'app-recuadro',
  standalone: true,
  imports: [
    TableComponent
  ],
  templateUrl: './recuadro.component.html',
  styleUrl: './recuadro.component.css'
})
export class RecuadroComponent {
  @Input() cabecerasRec: any[] = []
  @Input() datosRec: any[] = []
  @Input() titulorecuadro: string = ""
  @Input() textoboton: string = ""
}
