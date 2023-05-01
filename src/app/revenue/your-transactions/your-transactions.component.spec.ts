import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourTransactionsComponent } from './your-transactions.component';

describe('YourTransactionsComponent', () => {
  let component: YourTransactionsComponent;
  let fixture: ComponentFixture<YourTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourTransactionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
