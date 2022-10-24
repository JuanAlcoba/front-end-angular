import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExpComponent } from './crear-exp.component';

describe('CrearExpComponent', () => {
  let component: CrearExpComponent;
  let fixture: ComponentFixture<CrearExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
