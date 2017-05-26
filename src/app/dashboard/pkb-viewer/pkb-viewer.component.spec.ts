import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkbViewerComponent } from './pkb-viewer.component';

describe('PkbViewerComponent', () => {
  let component: PkbViewerComponent;
  let fixture: ComponentFixture<PkbViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkbViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkbViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
