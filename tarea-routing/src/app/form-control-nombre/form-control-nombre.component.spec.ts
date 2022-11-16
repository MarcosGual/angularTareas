import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlNombreComponent } from './form-control-nombre.component';

describe('FormControlNombreComponent', () => {
  let component: FormControlNombreComponent;
  let fixture: ComponentFixture<FormControlNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormControlNombreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
