import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsContentComponent } from './icons-content.component';

describe('IconsContentComponent', () => {
  let component: IconsContentComponent;
  let fixture: ComponentFixture<IconsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
