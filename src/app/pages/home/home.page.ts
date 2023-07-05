import { Component, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  private oidcSecurityService = inject(OidcSecurityService);
  
  login() {
    this.oidcSecurityService.authorize();
  }
}
