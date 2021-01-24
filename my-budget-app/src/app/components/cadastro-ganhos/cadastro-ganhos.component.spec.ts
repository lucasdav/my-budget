import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroGanhosComponent } from './cadastro-ganhos.component';

describe('CadastroGanhosComponent', () => {
  let component: CadastroGanhosComponent;
  let fixture: ComponentFixture<CadastroGanhosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroGanhosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroGanhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
