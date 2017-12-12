var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', e => this.render(e));
  },

  render: function(model) {
    this.$el.html('<div class="loading">Please wait...</div>');

    if (model) {
      this.$el.html(this.template(model.attributes));
    }
    return this;
  },

  playVideo: function(self) {
    self.$el.html(self.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});
