
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeService {
  private urlListar = 'http://localhost:8080/listar/';
  private urlTabela = 'http://localhost:8080/getFile/';

  // URL to web api

  constructor(private http: Http) {

   }

   inserir(caminho){
      return this.http.get(this.url+caminho)
        .map(res => res.json());
    }

    getTabela(c){
     return this.http.get(this.urlTabela+c)
       .map(res => res.json());
   }

   listarTabela(l,p){
      return this.http.get(this.urlListar+l+"/"+p)
        .map(res => res.json());
    }

}
