var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('select', this.selectVideo, this);
    
  },
  
  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  

  template: templateURL('src/templates/videoPlayer.html')

});
  