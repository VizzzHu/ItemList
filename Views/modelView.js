/**
 * Created by xianlin on 8/5/14.
 */
var ModelView = Backbone.View.extend({
    el: 'table',

    initialize:function() {
        this.template = _.template($('#item-template').html());
    },

    render: function() {
        var html='';
        html += this.template(this.model.attributes);
        this.$el.find('#listBody').append(html);
        return this;
    }

});