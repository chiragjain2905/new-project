import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageFooterComponent } from './main-page-footer.component';

describe('MainPageFooterComponent', () => {
  let component: MainPageFooterComponent;
  let fixture: ComponentFixture<MainPageFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
