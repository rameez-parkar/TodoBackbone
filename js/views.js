var TodoView = Backbone.View.extend({
  render: function() {
    const self = this;
    $.get("./templates/list.html", function(data) {
      const template = _.template(data);
      console.log(self.model);
      self.$el.html(template(self.model.toJSON()));
    });
    return self;
  }
});

var TodoListView = Backbone.View.extend({
  render: function() {
    this.model.each(task => {
      const todoView = new TodoView({ model: task });
      this.$el.append(todoView.render().$el);
    });
    return this;
  }
});
