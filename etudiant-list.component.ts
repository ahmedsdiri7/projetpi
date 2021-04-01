import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs';
import {EtudiantsService} from '../shared/etudiants.service';
import {Etudiants} from '../model/etudiants';


@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {
  @Input() details: Etudiants;
    closeResult: string;
    valeur: string;
  etudiants: Observable<Etudiants[]>;
  p: number = 1;
  constructor(private servEtud: EtudiantsService) { }

  ngOnInit(): void {
      this.reloadData();
  }
  reloadData(){
    this.etudiants = this.servEtud.getEtudiantList();
  }
  deleteEtudiants(id: number){
      if (window.confirm('Vous êtes sur de vouloir le retirer ?')) {
          this.servEtud.deleteEtudiant(id).subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  }

}
