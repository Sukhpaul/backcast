var VideoPlayerView = Backbone.View.extend({

  // initialize: function() {
  //   this.getID();
  // },
  
  // getID: function() {
  //   var id = this.model.get('id');
  //   console.log('Here is our video ID', id);
  //   var $iframe = $('<iframe> class="embed-responsive-item" src="https://www.youtube.com/embed/' + id + '</iframe>');
  //   console.log('Our new iframe', $iframe);
  // },
  
  render: function() {
    //this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  // render snippet - title, snippet - description and add id - videoId to iframe tag
  

  template: templateURL('src/templates/videoPlayer.html')

});
  