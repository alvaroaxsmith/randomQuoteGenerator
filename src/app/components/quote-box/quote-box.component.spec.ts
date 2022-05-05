import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteBoxComponent } from './quote-box.component';

describe('QuoteBoxComponent', () => {
  let component: QuoteBoxComponent;
  let fixture: ComponentFixture<QuoteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
