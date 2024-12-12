import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatGPT3Component } from './what-gpt3.component';

describe('WhatGPT3Component', () => {
  let component: WhatGPT3Component;
  let fixture: ComponentFixture<WhatGPT3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatGPT3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatGPT3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
