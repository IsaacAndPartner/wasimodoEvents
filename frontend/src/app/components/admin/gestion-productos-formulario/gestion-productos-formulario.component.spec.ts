import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionProductosFormularioComponent } from './gestion-productos-formulario.component';

describe('GestionProductosFormularioComponent', () => {
  let component: GestionProductosFormularioComponent;
  let fixture: ComponentFixture<GestionProductosFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionProductosFormularioComponent]
    });
    fixture = TestBed.createComponent(GestionProductosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
