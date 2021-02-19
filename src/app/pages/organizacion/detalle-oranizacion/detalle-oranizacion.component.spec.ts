import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOranizacionComponent } from './detalle-oranizacion.component';

describe('DetalleOranizacionComponent', () => {
  let component: DetalleOranizacionComponent;
  let fixture: ComponentFixture<DetalleOranizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleOranizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleOranizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
