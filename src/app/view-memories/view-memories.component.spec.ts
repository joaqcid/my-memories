
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMemoriesComponent } from './view-memories.component';

describe('ViewMemoriesComponent', () => {
  let component: ViewMemoriesComponent;
  let fixture: ComponentFixture<ViewMemoriesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMemoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMemoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
