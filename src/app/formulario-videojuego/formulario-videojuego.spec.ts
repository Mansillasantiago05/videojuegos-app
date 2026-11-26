import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioVideojuego } from './formulario-videojuego';

describe('FormularioVideojuego', () => {
  let component: FormularioVideojuego;
  let fixture: ComponentFixture<FormularioVideojuego>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioVideojuego],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioVideojuego);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
