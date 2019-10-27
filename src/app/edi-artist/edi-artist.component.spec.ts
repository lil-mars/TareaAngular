import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiArtistComponent } from './edi-artist.component';

describe('EdiArtistComponent', () => {
  let component: EdiArtistComponent;
  let fixture: ComponentFixture<EdiArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdiArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
