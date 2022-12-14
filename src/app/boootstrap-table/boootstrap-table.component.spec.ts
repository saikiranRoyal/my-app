import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoootstrapTableComponent } from './boootstrap-table.component';

describe('BoootstrapTableComponent', () => {
  let component: BoootstrapTableComponent;
  let fixture: ComponentFixture<BoootstrapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoootstrapTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoootstrapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
