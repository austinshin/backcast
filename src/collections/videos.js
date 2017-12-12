var Videos = Backbone.Collection.extend({
  search: function() {
    $.ajax({ 
      type: 'GET',
    });
  },

  model: Video

});
