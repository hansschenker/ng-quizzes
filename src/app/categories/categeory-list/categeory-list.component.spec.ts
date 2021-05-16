import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategeoryListComponent } from './categeory-list.component';

describe('CategeoryListComponent', () => {
  let component: CategeoryListComponent;
  let fixture: ComponentFixture<CategeoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategeoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategeoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
