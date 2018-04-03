import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrividyatableComponent } from './srividyatable.component';

describe('SrividyatableComponent', () => {
  let component: SrividyatableComponent;
  let fixture: ComponentFixture<SrividyatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrividyatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrividyatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
