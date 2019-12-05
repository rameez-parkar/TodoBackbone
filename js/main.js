// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

const TodoModel = Backbone.Model.extend();

const TodoCollection = Backbone.Collection.extend({
  model: TodoModel
});

const TodoView = Backbone.View.extend({
  render: function() {
    this.$el.html("<li>" + this.model.get("task") + "</li>");
    return this;
  }
});

const TodoListView = Backbone.View.extend({
  render: function() {
    this.model.each(task => {
      const todoView = new TodoView({ model: task });
      this.$el.append(todoView.render().$el);
    });
    return this;
  }
});

const tasks = new TodoCollection([
  new TodoModel({ task: "Complete Backbone Assignment" }),
  new TodoModel({ task: "Complete Redux V1 Assignment" }),
  new TodoModel({ task: "Complete Redux V2 Assignment" }),
  new TodoModel({ task: "Complete Redux V3 Assignment" })
]);

const todoCollectionView = new TodoListView({
  el: "#container",
  model: tasks
});
todoCollectionView.render();
