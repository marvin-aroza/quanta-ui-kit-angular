import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantaUiKit } from './quanta-ui-kit';

describe('QuantaUiKit', () => {
  let component: QuantaUiKit;
  let fixture: ComponentFixture<QuantaUiKit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantaUiKit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuantaUiKit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
