var VideoListEntryView = Backbone.View.extend({

  
  render: function() {
    console.log('These are my attributes,', this.model.attributes);
    //this.$el.html(this.template(this.model.attributes));
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
