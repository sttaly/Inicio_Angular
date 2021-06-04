import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTableUsersComponent } from './principal-table-users.component';

describe('PrincipalTableUsersComponent', () => {
  let component: PrincipalTableUsersComponent;
  let fixture: ComponentFixture<PrincipalTableUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalTableUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTableUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
