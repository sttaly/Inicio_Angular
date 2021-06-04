import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPerfilComponent } from './details-perfil.component';

describe('DetailsPerfilComponent', () => {
  let component: DetailsPerfilComponent;
  let fixture: ComponentFixture<DetailsPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
