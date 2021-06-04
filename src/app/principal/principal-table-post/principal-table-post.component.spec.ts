import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTablePostComponent } from './principal-table-post.component';

describe('PrincipalTablePostComponent', () => {
  let component: PrincipalTablePostComponent;
  let fixture: ComponentFixture<PrincipalTablePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalTablePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTablePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
