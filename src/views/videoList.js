var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    this.$el.children().detach();
    this.collection.forEach(this.renderVideo, this);
    
    return this;
  },

  renderVideo: function(video) {

    var videoView = new VideoListEntryView({model: video});
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});

