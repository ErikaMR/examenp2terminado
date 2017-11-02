import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	fecha: DS.attr('string'),

	preguntas: DS.hasMany('question')
});
