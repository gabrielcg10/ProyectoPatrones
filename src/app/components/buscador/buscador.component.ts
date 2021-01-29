import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CursosService } from "../../services/cursos.service";
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  cursos:any[] = []

  constructor( private activatedRoute: ActivatedRoute,
              private _cursosService: CursosService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
      // console.log(params['termino']);
      this.cursos=this._cursosService.buscarCursos(params['termino']);
      console.log(this.cursos);
    });
  }

}
