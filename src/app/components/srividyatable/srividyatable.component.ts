import { Component, OnInit } from '@angular/core';
import { SrividyaService } from '../../services/srividya.service';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Srividya } from '../models/srividya.model';


@Component({
  selector: 'srividyatable',
  templateUrl: './srividyatable.component.html',
  styleUrls: ['./srividyatable.component.css']
})
export class SrividyatableComponent implements OnInit {

  dataSource = new SrividyaDataSource(this.srividyaService);
  displayedColumns = ['name', 'email', 'phone'];

  constructor(private srividyaService: SrividyaService) { }

  ngOnInit() {
  }

}
export class SrividyaDataSource extends DataSource<any>{
  constructor(private srividyaService: SrividyaService){
    super();
  }

  connect(): Observable<Srividya[]>{
    return this.srividyaService.getUser();

  }
  disconnect(){}
}
