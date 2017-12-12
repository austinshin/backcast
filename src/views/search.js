var SearchView = Backbone.View.extend({  
  
  render: function() {
    this.searchClick(); 
    this.$el.html(this.template());
    return this;
  },

  events: {
    'click button.btn': 'searchClick',
    'keyup .form-control': 'keyPressEventHandler' 
  },

  keyPressEventHandler : function(event) {
    if (event.keyCode === 13) {
      this.searchClick();
    }
  },
  
  searchClick: function() {   
    var text = $('.form-control').val();
    this.collection.search(text, this.collection);   
  },

  template: templateURL('src/templates/search.html')

});
