var VideoListView = Backbone.View.extend({

  initialize: function () {
    this.collection.on('sync', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function(video) {
      var videoView = new VideoListEntryView({model: video});
      this.$el.append(videoView.render().el);
    }, this);
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});


// updates VideoListView view on DOM
