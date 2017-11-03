import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions:{
		savePregunta(){
			let canSave = true;

			
				this.get('examen.preguntas').forEach((pregunta)=>{

					if(pregunta.get('id')!=this.get('question.id')){
						if(this.get('question.nombre')==pregunta.get('nombre')){
							canSave=false;
						}
					}
					
			
			})
			if(canSave){
				let examen= this.get('examen')
				examen.save().then(()=>{
					return Ember.RSVP.all(examen.get('preguntas').invoke('save')).then((arreglo)=>{
						for(var i=0, len=arreglo.length ; i<len ; i++){
							return Ember.RSVP.all(arreglo[i].get('options').invoke('save')).then(()=>{
							})
						}
					})
				});

			}else{
				alert('Pregunta ya se encuentra registrada')
				return;
			}
			
		}
			
	}
});
