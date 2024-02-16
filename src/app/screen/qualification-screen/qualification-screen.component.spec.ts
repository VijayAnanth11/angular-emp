import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationScreenComponent } from './qualification-screen.component';

describe('QualificationScreenComponent', () => {
  let component: QualificationScreenComponent;
  let fixture: ComponentFixture<QualificationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualificationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
