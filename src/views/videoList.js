var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', e => this.render(e));
  },

  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();
    this.collection.forEach(this.renderVideo, this);

    if (this.collection.length) {
      this.collection.models[0].select();
    }
    return this;
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});

