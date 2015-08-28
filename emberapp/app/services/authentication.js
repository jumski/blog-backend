import Ember from 'ember';

export default Ember.Service.extend({
  login: false,
  isSignedIn: Ember.computed.alias('login'),

  init() {
    let login = localStorage['login'],
        password = localStorage['password'];

    if (login && password) {
      this.signIn(login, password);
    }
  },

  signIn(login, password) {
    this.set('login', login);
    this.set('password', password);

    localStorage['login'] = login;
    localStorage['password'] = password;
  },

  signOut() {
    this.set('login', false);
    this.set('password', false);

    delete localStorage['login'];
    delete localStorage['password'];
  }
});