var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    var self = this;
    this.render();
    Backbone.on('playVideo', function(e) {
      self.playVideo.call(e, self);
    });
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  playVideo: function(self) {
    self.$el.html(self.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html'),

});
