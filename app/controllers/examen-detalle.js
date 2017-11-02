import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
	borrar(){
		this.get('model').destroyRecord();
		alert('Eliminando')
		}
	}
});
