import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),

	actions:{
		save(){
			let examen = this.get('examen');
			if( Ember.isBlank( examen.get('nombre') ) ){
				alert('Introduce un nombre para el examen');
				return;
			}

			examen.save().then(()=>{
				Ember.RSVP.all(examen.get('preguntas').invoke('save')).then(()=>{
					alert('Guardado correctamente');
					this.sendAction('didSave');
				})
			}); 
		},

		saveQuestion(){
			let question = this.get('store').createRecord('question', {
				examen: this.get('examen')
			});
		}
	}
});
