import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDesafianteComponent } from './poke-desafiante.component';

describe('PokeDesafianteComponent', () => {
  let component: PokeDesafianteComponent;
  let fixture: ComponentFixture<PokeDesafianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDesafianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDesafianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
