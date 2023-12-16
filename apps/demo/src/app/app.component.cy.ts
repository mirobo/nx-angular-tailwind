import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

describe(AppComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(AppComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(AppComponent);
  });
});

describe(NxWelcomeComponent.name, () => {
  beforeEach(() => {
    TestBed.overrideComponent(NxWelcomeComponent, {
      add: {
        imports: [],
        providers: [],
      },
    });
  });

  it('renders', () => {
    cy.mount(NxWelcomeComponent);
  });
});
