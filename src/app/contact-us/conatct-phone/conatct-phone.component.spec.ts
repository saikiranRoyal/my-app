import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatctPhoneComponent } from './conatct-phone.component';

describe('ConatctPhoneComponent', () => {
  let component: ConatctPhoneComponent;
  let fixture: ComponentFixture<ConatctPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConatctPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConatctPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
