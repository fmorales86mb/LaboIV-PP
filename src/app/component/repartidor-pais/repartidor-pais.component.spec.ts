import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartidorPaisComponent } from './repartidor-pais.component';

describe('RepartidorPaisComponent', () => {
  let component: RepartidorPaisComponent;
  let fixture: ComponentFixture<RepartidorPaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepartidorPaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartidorPaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
