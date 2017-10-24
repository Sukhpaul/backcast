// Inside of src/views/app.js, modify the code that will 
// render this view to the DOM. Not all of the tests in 
// appSpec are pertinent at this time. Be sure to follow 
// the MVP practice, that is writing the minimum code at
// each step.

var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(window.exampleVideoData);
  },

  render: function() {
    this.$el.html(this.template());
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
