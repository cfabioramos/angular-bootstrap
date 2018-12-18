import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaFinaArquiteturaComponent } from './casa-fina-arquitetura.component';

describe('CasaFinaArquiteturaComponent', () => {
  let component: CasaFinaArquiteturaComponent;
  let fixture: ComponentFixture<CasaFinaArquiteturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasaFinaArquiteturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasaFinaArquiteturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
