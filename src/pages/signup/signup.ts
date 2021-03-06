import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from 'ionic-angular';

import { FirebaseAuthState } from 'angularfire2';

import { AuthService } from './../../providers/auth.service';
import { UserService } from './../../providers/user.service';
import { User } from './../../models/user.model';

@Component({
	selector: 'page-signup',
	templateUrl: 'signup.html'
})
export class SignupPage {

	signupForm: FormGroup;

	constructor(
		public authService: AuthService,
		public formBuilder: FormBuilder,
		public navCtrl: NavController,
		public navParams: NavParams,
		public userService: UserService
	) {
		let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

		this.signupForm = this.formBuilder.group({
			name: ['', [Validators.required, Validators.minLength(3)]],
			username: ['', [Validators.required, Validators.minLength(3)]],
			// email: ['', [Validators.compose(Validators.required, Validators.pattern(emailRegex))]],
			email: ['', [Validators.required, Validators.pattern(emailRegex)]],
			password: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	onSubmit(): void {

		let formUser = this.signupForm.value;

		this.authService.createAuthUser({
			email: formUser.email,
			password: formUser.password
		}).then((authState: FirebaseAuthState) => {
			
			delete formUser.password;
			formUser.uid = authState.auth.uid;
			
			this.userService.create(this.signupForm.value).then(() => {
				console.log("Usuario Cadastrado!");
			});	
		});

		// console.log(this.signupForm.value);
		// this.userService.create(this.signupForm.value).then(() => {
		// 	console.log("Usuario Cadastrado!");
		// });
	}
}
