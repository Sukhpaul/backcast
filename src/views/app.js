var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    console.log('this.Videos in initialize: ', this.videos);
    //this.firstVideo();
    this.render();
  },
  
  // firstVideo: function() {
  //   if (this.videos.length > 0) {
  //     this.videos.at(0).select();
  //     //console.log('inside first video', this.videos.at(0).select());
  //   }
  // },

  render: function() {
    this.$el.html(this.template());
    
    new SearchView ({
      el: this.$('.search'),
      collection: this.videos
    }).render();
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    
    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    }).render();
    return this;
  },
  
  
  

  template: templateURL('src/templates/app.html')

});
