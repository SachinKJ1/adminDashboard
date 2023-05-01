import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueHomeComponent } from './revenue-home.component';

describe('RevenueHomeComponent', () => {
  let component: RevenueHomeComponent;
  let fixture: ComponentFixture<RevenueHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenueHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevenueHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
