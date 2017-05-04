
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeService {
  private url = 'http://localhost:8080/getFile/';
  private urlTabela = 'http://localhost:8080/listar/';


  // URL to web api

  constructor(private http: Http) {

   }

   inserir(caminho){
      return this.http.get(this.url+caminho)
        .map(res => res.json());
    }

    getTabela(limite, pular){
     return this.http.get(this.urlTabela+limite+"/"+pular)
       .map(res => res.json());
   }

}
