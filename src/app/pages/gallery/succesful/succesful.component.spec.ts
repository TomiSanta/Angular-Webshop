import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfulComponent } from './succesful.component';

describe('SuccesfulComponent', () => {
  let component: SuccesfulComponent;
  let fixture: ComponentFixture<SuccesfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
