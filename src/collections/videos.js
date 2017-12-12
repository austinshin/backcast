var Videos = Backbone.Collection.extend({
  
  search: function() {
    $.ajax({ 
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      dataType: 'application/json',
      data: {
        part: 'snippet',
        q: 'surfing',
        maxResults: 25,
        type: ''
      },
      success: function() {
        console.log('success');
      }
    });
  },

  model: Video

});
