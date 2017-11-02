import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	respuesta: DS.attr('boolean'),

	preguntas:DS.belongsTo('question'),
});
