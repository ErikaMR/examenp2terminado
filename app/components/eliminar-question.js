import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroyQuestion(){
			this.get('question').deleteRecord();
		}
	}
});
