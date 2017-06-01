import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

	construtor(
		public auth: AngularFireAuth,
		public http: Http
	) {
		console.log('Hello Auth Provider');
	}

	createAuthUser(user: {email: string, password: string}): firebase.Promise<FirebaseAuthState> {
		return this.auth.createUser(user);
	}
}