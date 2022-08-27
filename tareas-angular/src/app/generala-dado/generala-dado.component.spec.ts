import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralaDadoComponent } from './generala-dado.component';

describe('GeneralaDadoComponent', () => {
  let component: GeneralaDadoComponent;
  let fixture: ComponentFixture<GeneralaDadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralaDadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralaDadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
