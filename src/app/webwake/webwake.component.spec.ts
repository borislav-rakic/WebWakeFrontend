import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebwakeComponent } from './webwake.component';

describe('WebwakeComponent', () => {
  let component: WebwakeComponent;
  let fixture: ComponentFixture<WebwakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebwakeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebwakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
