import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplodProjectComponent } from './uplod-project.component';

describe('UplodProjectComponent', () => {
  let component: UplodProjectComponent;
  let fixture: ComponentFixture<UplodProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UplodProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UplodProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
