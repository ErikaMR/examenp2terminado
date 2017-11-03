import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		veALaLista(){
			debugger
			console.log('hi')
			return this.transitionToRoute('lista-examenes');
		}
	}
});
