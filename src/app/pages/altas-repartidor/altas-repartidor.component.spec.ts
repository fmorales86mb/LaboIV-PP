import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasRepartidorComponent } from './altas-repartidor.component';

describe('AltasRepartidorComponent', () => {
  let component: AltasRepartidorComponent;
  let fixture: ComponentFixture<AltasRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltasRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltasRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
