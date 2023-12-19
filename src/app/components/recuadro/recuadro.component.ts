import {Component, Input} from '@angular/core';
import {TableComponent} from "../table/table.component";
import {CicloformativoService} from "../../services/cicloformativo.service";

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
  constructor(private cfService: CicloformativoService) {
  }
  @Input() cabecerasRec: any[] = []
  @Input() datosRec: any[] = []
  @Input() titulorecuadro: string = ""
  @Input() textoboton: string = ""

  alerta() {
    this.cfService.cicloAlert(this.titulorecuadro)
  }

}
