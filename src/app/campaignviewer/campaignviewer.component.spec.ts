import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignviewerComponent } from './campaignviewer.component';

describe('CampaignviewerComponent', () => {
  let component: CampaignviewerComponent;
  let fixture: ComponentFixture<CampaignviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
