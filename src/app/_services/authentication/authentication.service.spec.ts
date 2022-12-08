import { ICredentials, IAuthentication } from 'src/app/_interfaces';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpController: HttpTestingController;
  const credentials: ICredentials = {
    email: 'unit_test@gmail.com',
    password: 'unit_test@gmail.com',
    firstname: 'Unit',
    lastname: 'Test',
  };
  const userLogged: IAuthentication = {
    firstname: 'Unit',
    userId: 'dsdffdf334',
    token: 'S23EDC33DF23REZ',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthenticationService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).true;
  });

  it('should login a user', () => {
    service.login(credentials).subscribe((response: IAuthentication) => {
      expect(response).equal(userLogged);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${environment.host}/api/auth/login`,
    });

    req.flush(userLogged);
  });

  it('should signup a new user', () => {
    service.signup(credentials).subscribe((response: IAuthentication) => {
      expect(response).equal(userLogged);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${environment.host}/api/auth/signup`,
    });

    req.flush(userLogged);
  });

  it('should disconnect a  user', () => {
    service.disconnect().subscribe((response: IAuthentication) => {
      expect(response).equal(userLogged);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${environment.host}/api/auth/logout`,
    });

    req.flush(userLogged);
  });
});
