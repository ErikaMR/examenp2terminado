import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
 		borrarExamen(){
 			alert("borrar");
           // this.get('model').destroyRecord();
       }
    }
});
