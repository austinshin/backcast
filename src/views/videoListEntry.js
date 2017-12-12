var VideoListEntryView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  events: {
    'click div.video-list-entry-title': 'handleClick'
  },

  handleClick: function(e) {
    Backbone.trigger('playVideo', this); 
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
