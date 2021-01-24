import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDespesasComponent } from './cadastro-despesas.component';

describe('CadastroDespesasComponent', () => {
  let component: CadastroDespesasComponent;
  let fixture: ComponentFixture<CadastroDespesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDespesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDespesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
