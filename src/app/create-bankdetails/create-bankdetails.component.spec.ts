import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankdetailsComponent } from './create-bankdetails.component';

describe('CreateBankdetailsComponent', () => {
  let component: CreateBankdetailsComponent;
  let fixture: ComponentFixture<CreateBankdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBankdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
