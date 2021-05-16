import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategeoryItemComponent } from './categeory-item.component';

describe('CategeoryItemComponent', () => {
  let component: CategeoryItemComponent;
  let fixture: ComponentFixture<CategeoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategeoryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategeoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
