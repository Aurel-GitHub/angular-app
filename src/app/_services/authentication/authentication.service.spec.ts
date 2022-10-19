import { ICredentials, IAuthentication } from 'src/app/_interfaces';
import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

fdescribe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpController: HttpTestingController;
  const credentials: ICredentials = {
    email: 'unit_test@gmail.com',
    password: 'unit_test@gmail.com',
    firstname: 'Unit',
    lastname: 'Test',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthenticationService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return user<IAuthentication>', () => {
    const userLogged: IAuthentication = {
      firstname: 'John',
      userId: 'dsdffdf334',
      token: 'S23EDC33DF23REZ',
    };
    service.login(credentials).subscribe((response: IAuthentication) => {
      expect(response).toEqual(userLogged);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `${environment.host}/api/auth/login`,
    });

    req.flush(userLogged);
  });
});
