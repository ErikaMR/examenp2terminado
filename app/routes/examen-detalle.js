import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		let id = params.exam;
		return this.store.find('exam',id);
	},
	actions:{
		borrar(){
			alert('El examen se eliminó');
		}
	}
});
