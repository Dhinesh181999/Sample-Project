import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfunctionComponent } from './addfunction.component';

describe('AddfunctionComponent', () => {
  let component: AddfunctionComponent;
  let fixture: ComponentFixture<AddfunctionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddfunctionComponent]
    });
    fixture = TestBed.createComponent(AddfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
