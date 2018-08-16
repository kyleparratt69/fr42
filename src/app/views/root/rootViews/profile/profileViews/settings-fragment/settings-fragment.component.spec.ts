import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsFragmentComponent } from './settings-fragment.component';

describe('SettingsFragmentComponent', () => {
  let component: SettingsFragmentComponent;
  let fixture: ComponentFixture<SettingsFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
