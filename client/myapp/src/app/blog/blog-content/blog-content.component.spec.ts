import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContentComponent } from './blog-content.component';

describe('ContentComponent', () => {
  let component: BlogContentComponent;
  let fixture: ComponentFixture<BlogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
