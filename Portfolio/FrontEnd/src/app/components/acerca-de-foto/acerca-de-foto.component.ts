import { Component, OnInit } from '@angular/core';
import { person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-acerca-de-foto',
  templateUrl: './acerca-de-foto.component.html',
  styleUrls: ['./acerca-de-foto.component.css']
})
export class AcercaDeFotoComponent implements OnInit {
  person: person = new person("","","");

  constructor(public personService: PersonService){}

  ngOnInit():void {
    this.personService.getPerson().subscribe(data => {this.person = data})
  }
}
