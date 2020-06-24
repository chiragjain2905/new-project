import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageHomeComponent } from './main-page-home.component';

describe('MainPageHomeComponent', () => {
  let component: MainPageHomeComponent;
  let fixture: ComponentFixture<MainPageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
