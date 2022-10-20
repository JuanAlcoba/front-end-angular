import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerComponent } from './editar-per.component';

describe('EditarPerComponent', () => {
  let component: EditarPerComponent;
  let fixture: ComponentFixture<EditarPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
