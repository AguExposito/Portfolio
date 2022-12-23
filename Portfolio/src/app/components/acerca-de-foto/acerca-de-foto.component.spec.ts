import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeFotoComponent } from './acerca-de-foto.component';

describe('AcercaDeFotoComponent', () => {
  let component: AcercaDeFotoComponent;
  let fixture: ComponentFixture<AcercaDeFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
