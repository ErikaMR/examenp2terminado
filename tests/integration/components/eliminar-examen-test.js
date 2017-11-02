import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eliminar-examen', 'Integration | Component | eliminar examen', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{eliminar-examen}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#eliminar-examen}}
      template block text
    {{/eliminar-examen}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
