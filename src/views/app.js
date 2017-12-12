var AppView = Backbone.View.extend({

  el: '#app', 

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {  
    this.$el.html(this.template());
  
    //render videoplayer
    new VideoPlayerView({
      el: this.$('.player'),
    }).render();

    //render listview
    new VideoListView({
      el: this.$('.list'), 
      collection: this.videos,
    }).render();
    
    new SearchView({
      el: this.$('.search'),
      
    }).render();  
    //search
    
  
    return this;
  },

  template: templateURL('src/templates/app.html')

});
