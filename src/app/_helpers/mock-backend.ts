import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions,
  RequestMethod,
  XHRBackend,
  RequestOptions
} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {USERS} from '../mock-users';
import {Campaign} from '../_models/campaign';
import {User} from '../_models/user';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
  // array in local storage for registered users
  // let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
  let users = [];
  for (let i in USERS) {
    users.push(USERS[i]);
  }
  // configure fake backend
  backend.connections.subscribe((connection) => {
    // wrap in timeout to simulate server api call
    setTimeout(() => {
      // authenticate
      if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
        // get parameters from post request
        let params = JSON.parse(connection.request.getBody());

        // find if any user matches login credentials
        let filteredUsers = users.filter(user => {
          return user.username === params.username && user.password === params.password;
        });

        if (filteredUsers.length) {
          // if login details are valid return 200 OK with user details and fake jwt token
          let user = filteredUsers[0];
          user.token = 'fake-jwt-token';

          connection.mockRespond(new Response(new ResponseOptions({
            status: 200,
            body: user
          })));
        } else {
          // else return 400 bad request
          connection.mockError(new Error('Username or password is incorrect'));
        }

        return;
      }

      // get users
      if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
        // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
        if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          connection.mockRespond(new Response(new ResponseOptions({status: 200, body: users})));
        } else {
          // return 401 not authorised if token is null or invalid
          connection.mockRespond(new Response(new ResponseOptions({status: 401})));
        }

        return;
      }

      // get user by id
      if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Get) {
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          let urlParts = connection.request.url.split('/');
          let id = parseInt(urlParts[urlParts.length - 1]);
          let matchedUsers = users.filter(user => {
            return user.id === id;
          });
          let user = matchedUsers.length ? matchedUsers[0] : null;

          // respond 200 OK with user
          connection.mockRespond(new Response(new ResponseOptions({status: 200, body: user})));
        } else {
          // return 401 not authorised if token is null or invalid
          connection.mockRespond(new Response(new ResponseOptions({status: 401})));
        }

        return;
      }

      // create user
      if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
        // get new user object from post body
        let newUser = JSON.parse(connection.request.getBody());

        // validation
        let duplicateUser = users.filter(user => {
          return user.username === newUser.username;
        }).length;
        if (duplicateUser) {
          return connection.mockError(new Error('Username "' + newUser.username + '" is already taken'));
        }

        // save new user
        newUser.id = users.length + 1;
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        // respond 200 OK
        connection.mockRespond(new Response(new ResponseOptions({status: 200})));

        return;
      }

      // delete user
      if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Delete) {
        // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
        if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
          // find user by id in users array
          let urlParts = connection.request.url.split('/');
          let id = parseInt(urlParts[urlParts.length - 1]);
          for (let i = 0; i < users.length; i++) {
            let user = users[i];
            if (user.id === id) {
              // delete user
              users.splice(i, 1);
              localStorage.setItem('users', JSON.stringify(users));
              break;
            }
          }

          // respond 200 OK
          connection.mockRespond(new Response(new ResponseOptions({status: 200})));
        } else {
          // return 401 not authorised if token is null or invalid
          connection.mockRespond(new Response(new ResponseOptions({status: 401})));
        }

        return;
      }

      // create campaign
      if (connection.request.url.endsWith('/api/campaignCreate') && connection.request.method === RequestMethod.Post) {
        let newCampaign: Campaign = JSON.parse(connection.request.getBody());

        let user: User = JSON.parse(localStorage.getItem('currentUser'));
        let maxId: number = 0;

        for (let i: number = 0; i < user.campaigns.length; i++) {
          if (user.campaigns[i].id > maxId) {
            maxId = user.campaigns[i].id;
          }
        }
        newCampaign.id = maxId + 1;
        user.campaigns.push(newCampaign);
        localStorage.setItem('currentUser', JSON.stringify(user));

        connection.mockRespond(new Response(new ResponseOptions({status: 200})));

        return;
      }

      // edit campaign
      if (connection.request.url.endsWith('/api/campaignEdit') && connection.request.method === RequestMethod.Put) {
        let newCampaign: Campaign = JSON.parse(connection.request.getBody());
        let user: User = JSON.parse(localStorage.getItem('currentUser'));
        for (let i: number = 0; i < user.campaigns.length; i++) {
          if (user.campaigns[i].id == newCampaign.id) {
            user.campaigns[i] = newCampaign;
          }
        }

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));

        // respond 200 OK
        connection.mockRespond(new Response(new ResponseOptions({status: 200})));

        return;
      }

      // delete campaign
      if (connection.request.url.match(/\/api\/campaignDelete\/\d+$/) && connection.request.method === RequestMethod.Delete) {
        let urlParts = connection.request.url.split('/');
        let id = parseInt(urlParts[urlParts.length - 1]);
        let user: User = JSON.parse(localStorage.getItem('currentUser'));
        for (let i: number = 0; i < user.campaigns.length; i++) {
          if (user.campaigns[i].id == id) {
            user.campaigns.splice(i, 1);
            i--;
          }
        }

        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));

        // respond 200 OK
        connection.mockRespond(new Response(new ResponseOptions({status: 200})));

        return;
      }

      // pass through any requests not handled above
      let realHttp = new Http(realBackend, options);
      let requestOptions = new RequestOptions({
        method: connection.request.method,
        headers: connection.request.headers,
        body: connection.request.getBody(),
        url: connection.request.url,
        withCredentials: connection.request.withCredentials,
        responseType: connection.request.responseType
      });
      realHttp.request(connection.request.url, requestOptions)
        .subscribe((response: Response) => {
            connection.mockRespond(response);
          },
          (error: any) => {
            connection.mockError(error);
          });

    }, 500);

  });

  return new Http(backend, options);
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: Http,
  useFactory: fakeBackendFactory,
  deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
