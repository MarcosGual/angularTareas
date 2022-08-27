import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasLibroComponent } from './alertas-libro.component';

describe('AlertasLibroComponent', () => {
  let component: AlertasLibroComponent;
  let fixture: ComponentFixture<AlertasLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertasLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertasLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
