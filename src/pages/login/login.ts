import { Component } from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login = { email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Signin() {
  this.restProvider.Signin(this.login).then((result) => {
    console.log(result);
  }, (err) => {
    console.log(err);
  });
}

}
