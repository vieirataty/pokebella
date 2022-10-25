import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { PokeDesafianteComponent } from './poke-desafiante/poke-desafiante.component';

@Component({
  selector: 'poke-botao-batalha',
  templateUrl: './poke-botao-batalha.component.html',
  styleUrls: ['./poke-botao-batalha.component.scss']
})
export class PokeBotaoBatalhaComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(
  //     PokeDesafianteComponent
  //   )
  // }

}
