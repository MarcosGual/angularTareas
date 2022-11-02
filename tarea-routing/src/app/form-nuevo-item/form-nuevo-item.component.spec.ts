import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoItemComponent } from './form-nuevo-item.component';

describe('FormNuevoItemComponent', () => {
  let component: FormNuevoItemComponent;
  let fixture: ComponentFixture<FormNuevoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNuevoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNuevoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
