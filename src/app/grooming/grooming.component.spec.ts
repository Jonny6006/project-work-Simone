import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingComponent } from './grooming.component';

describe('GroomingComponent', () => {
  let component: GroomingComponent;
  let fixture: ComponentFixture<GroomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroomingComponent]
    });
    fixture = TestBed.createComponent(GroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
