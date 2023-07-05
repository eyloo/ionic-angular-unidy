import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OauthCallbackPage } from './oauth-callback.page';

describe('OauthCallbackPage', () => {
  let component: OauthCallbackPage;
  let fixture: ComponentFixture<OauthCallbackPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OauthCallbackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
