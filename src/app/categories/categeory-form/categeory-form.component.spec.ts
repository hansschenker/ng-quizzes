import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategeoryFormComponent } from './categeory-form.component';

describe('CategeoryFormComponent', () => {
  let component: CategeoryFormComponent;
  let fixture: ComponentFixture<CategeoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategeoryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategeoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
