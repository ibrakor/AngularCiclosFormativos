import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() cabeceras: any[] = []
  @Input() datos: any[] = []
}
