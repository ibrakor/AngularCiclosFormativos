import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CicloformativoService {

  constructor() {
  }

  cicloAlert(message: string) {
    alert(message)
  }
}
