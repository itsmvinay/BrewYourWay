import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrewViewComponent } from './brew-view.component';

describe('BrewViewComponent', () => {
  let component: BrewViewComponent;
  let fixture: ComponentFixture<BrewViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrewViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
