import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypechartsComponent } from './typecharts.component';

describe('TypechartsComponent', () => {
  let component: TypechartsComponent;
  let fixture: ComponentFixture<TypechartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypechartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
