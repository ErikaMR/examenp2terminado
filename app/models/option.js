import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),

	preguntas:DS.belongsTo('question'),

	correcto: DS.attr('boolean', {defaultValue: false }),
});
