import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),

	examen:DS.belongsTo('exam'),
	options: DS.hasMany('option')
});
