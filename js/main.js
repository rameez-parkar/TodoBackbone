// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const Fruit = Backbone.Model.extend();

const Fruits = Backbone.Collection.extend({
  model: Fruit
});

const FruitView = Backbone.View.extend({
  render: function() {
    this.$el.html("<li>" + this.model.get("name") + "</li>");
    return this;
  }
});

const FruitsView = Backbone.View.extend({
  render: function() {
    this.model.each(fruit => {
      const fruitView = new FruitView({ model: fruit });
      this.$el.append(fruitView.render().$el);
    });
    return this;
  }
});

const fruits = new Fruits([
  new Fruit({ name: "Apple" }),
  new Fruit({ name: "Banana" }),
  new Fruit({ name: "Orange" }),
  new Fruit({ name: "Watermelon" })
]);

const fruitsView = new FruitsView({ el: "#container", model: fruits });
fruitsView.render();
