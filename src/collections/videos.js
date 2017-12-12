var Videos = Backbone.Collection.extend({
  
  model: Video, 

  parse: function(obj) {
    return obj.items;
  },
  
  search: function(message, collectionAll) { 
    Backbone.ajax({ 
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'json',
      data:  {
        key: window.YOUTUBE_API_KEY, 
        part: 'snippet', 
        q: message, 
        maxResults: 5, 
        type: 'video', 
        videoEmbeddable: true
      },
      success: (data) => {
        console.log('Search query succeeded');
        this.reset();
        data.items.forEach((e) => {
          var videoDataFromYoutube = new Video(e);
          this.add(videoDataFromYoutube);
        });
        this.models[0].select();
        this.trigger('sync');
      }, 
      error: function(data) {
        console.error(data);
      }
    });
  },
});
