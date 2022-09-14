import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBatalhaComponent } from './poke-batalha.component';

describe('PokeBatalhaComponent', () => {
  let component: PokeBatalhaComponent;
  let fixture: ComponentFixture<PokeBatalhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeBatalhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeBatalhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
