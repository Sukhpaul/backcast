var VideoListEntryView = Backbone.View.extend({
   
  events: {
    'click .video-list-entry-title': 'handleClick'
  }, 
  
  render: function() {
    //console.log('These are my attributes,', this.model.attributes);
    //this.$el.html(this.template(this.model.attributes));
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  handleClick: function(e) {
    e.stopImmediatePropagation();
    this.model.select();
     
  },

  template: templateURL('src/templates/videoListEntry.html')

});
