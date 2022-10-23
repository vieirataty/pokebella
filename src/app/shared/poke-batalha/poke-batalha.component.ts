import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PokeDesafianteComponent } from '../poke-desafiante/poke-desafiante.component';

@Component({
  selector: 'poke-batalha',
  templateUrl: './poke-batalha.component.html',
  styleUrls: ['./poke-batalha.component.scss']
})
export class PokeBatalhaComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(
      PokeDesafianteComponent
    )
  }

}
