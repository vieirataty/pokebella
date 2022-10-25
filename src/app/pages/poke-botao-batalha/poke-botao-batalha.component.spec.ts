import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBotaoBatalhaComponent } from './poke-botao-batalha.component';

describe('PokeBotaoBatalhaComponent', () => {
  let component: PokeBotaoBatalhaComponent;
  let fixture: ComponentFixture<PokeBotaoBatalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeBotaoBatalhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeBotaoBatalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
