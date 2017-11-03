 import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service('store'),

	actions:{
		save(){
			let examen = this.get('examen');
			let component = this;
			if( Ember.isBlank( examen.get('nombre') ) ){
				alert('Introduce un nombre para el examen');
				return;
			}
			this.sendAction('didSave')

			examen.save().then(()=>{
				return Ember.RSVP.all(examen.get('preguntas').invoke('save')).then((arreglo)=>{
					for(var i=0, len=arreglo.length ; i<len ; i++){
						return Ember.RSVP.all(arreglo[i].get('options').invoke('save')).then(()=>{
						})
					}
				}).then(()=>{
					console.log('guar')
					alert('Guardado correctamente');

					return component.sendAction('didSave');
				})
			}); 
		},

		saveQuestion(){
			let question = this.get('store').createRecord('question', {
				examen: this.get('examen')
			});
			let res1 = question.get('options').createRecord({
                question: question
            });
            let res2 = question.get('options').createRecord({
                question: question
            });
            let res3 = question.get('options').createRecord({
                question: question
            });
		}
	}
});


