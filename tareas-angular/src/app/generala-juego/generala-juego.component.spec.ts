import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralaJuegoComponent } from './generala-juego.component';

describe('GeneralaJuegoComponent', () => {
  let component: GeneralaJuegoComponent;
  let fixture: ComponentFixture<GeneralaJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralaJuegoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralaJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
