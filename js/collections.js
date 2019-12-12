const TodoCollection = Backbone.Collection.extend({
  url: "./data/tasks.json",
  model: Todo,
  parse: function(data) {
    return data.todolist;
  }
});
