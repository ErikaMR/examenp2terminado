import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),

	examen:DS.belongsTo('exam'),
	opcion: DS.hasMany('option')
});
