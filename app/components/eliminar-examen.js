import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		destroyExamen(){
			this.get('exam').deleteRecord();
		}
	}
});
