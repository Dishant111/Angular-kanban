import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbangridComponent } from './kanbangrid.component';

describe('KanbangridComponent', () => {
  let component: KanbangridComponent;
  let fixture: ComponentFixture<KanbangridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KanbangridComponent]
    });
    fixture = TestBed.createComponent(KanbangridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
