var VideoListView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log('this.collection is: ', this.collection);
    //$('.video-list').append(this.template);
    this.collection.forEach(function(video) {
      console.log('this is video', video);
      var videoView = new VideoListEntryView({model: video}).render();
      console.log('videoView variable', videoView);
      
    });
    return this;
  },
  

  template: templateURL('src/templates/videoList.html')

});


// updates VideoListView view on DOM
