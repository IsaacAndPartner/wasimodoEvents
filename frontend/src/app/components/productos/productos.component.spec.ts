import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosGrillaComponent } from './productos.component';

describe('ProductosGrillaComponent', () => {
  let component: ProductosGrillaComponent;
  let fixture: ComponentFixture<ProductosGrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosGrillaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductosGrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
