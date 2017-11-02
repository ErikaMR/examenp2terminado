import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lista-examenes', {path: '/'});
  this.route('nuevo-examen');
  this.route('examen-detalle', {path: 'examen-detalle/:exam'});
});

export default Router;