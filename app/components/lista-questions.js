import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement(...params){
		this._super(...params);
		this.$('.collapse').collapse({
		parent: '#lista-questions',
		toggle: false
		});
	}
});
