import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HomeService } from './home.service';

@Component({
  selector: 'my-home',
  template: require('./home.component.html'),
  styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {
  private uploadForm: FormGroup;
  private file: File;
  public arquivo: any;
  private linhas: any =[];

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) {
    this.uploadForm = this.formBuilder.group({
        arquivo: [''],
    });
  }

  ngOnInit() {
  }


  uploadFile(){
    let arquivo = this.uploadForm.value.arquivo;
    this.homeService.getTabela(arquivo).subscribe(data=> console.log(data));;
  }


  teste() {
    this.homeService.listarTabela(4,4).subscribe(data=> console.log(data));
  }

}
