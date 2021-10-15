import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwaresystemsComponent } from './softwaresystems.component';

describe('SoftwaresystemsComponent', () => {
  let component: SoftwaresystemsComponent;
  let fixture: ComponentFixture<SoftwaresystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftwaresystemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwaresystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
