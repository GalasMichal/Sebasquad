import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSebasquadComponent } from './about-sebasquad.component';

describe('AboutSebasquadComponent', () => {
  let component: AboutSebasquadComponent;
  let fixture: ComponentFixture<AboutSebasquadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSebasquadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSebasquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
