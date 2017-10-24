var VideoListView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('sync', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    
    var $item = this.$el;
    $('.video-list').children().empty();
    this.collection.forEach(function(video) {
      var videoView = new VideoListEntryView({model: video}).render();
      $item.append(videoView);
    });
    return this;
    
    
    
  },
  

  template: templateURL('src/templates/videoList.html')

});
