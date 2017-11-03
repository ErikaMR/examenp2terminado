import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.findAll('exam');
	},
	actions: {
		goToExam(examen){
		},
		borrarExamen(examen){
 			alert("Se eliminó el examen");
           	examen.destroyRecord();
       }
	}
});
