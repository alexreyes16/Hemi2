import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrolistaComponent } from './registrolista.component';

describe('RegistrolistaComponent', () => {
  let component: RegistrolistaComponent;
  let fixture: ComponentFixture<RegistrolistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrolistaComponent]
    });
    fixture = TestBed.createComponent(RegistrolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
