const todoCollection = new TodoCollection();
todoCollection.fetch({
  success: function() {
    const todoListView = new TodoListView({
      el: "#container",
      model: todoCollection
    });
    todoListView.render();
  }
});
