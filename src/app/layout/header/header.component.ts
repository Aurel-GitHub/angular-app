import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private _authenticationService: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    return this._authenticationService.disconnect().subscribe({
      complete: () => console.log('user disconnected'),
      error: (err: Error) => console.error(err),
      next: () => {
        localStorage.clear(), this.router.navigate(['/login']);
      },
    });
  }
}
