import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfouterComponent } from './afouter.component';

describe('AfouterComponent', () => {
  let component: AfouterComponent;
  let fixture: ComponentFixture<AfouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
