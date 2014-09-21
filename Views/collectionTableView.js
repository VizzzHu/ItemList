/**
 * Created by xianlin on 8/6/14.
 */
var PriceView = Backbone.View.extend({
    el: 'body',

    initialize: function() {
        this.template = _.template($('#item-new').html());
        for(var i=0; i<this.collection.models.length; i++) {
            this.addItem(this.collection.models[i]);
        }
    },

    events: {
        "click .add": "addNewItem",
        "click .save": "saveItem",
        "click .cancel": "cancelAddItem"
    },

    addItem: function(model) {
        var newItemView = new ModelView({model: model})
            .render();
    },

    addNewItem: function(e) {
        //window.location = 'addNewItem.html';
        this.render();
    },

    saveItem: function(e) {
        var newItem = new PriceList();
        var saveItem = new PriceList();
        var inputsBoxes = this.$('input');
        var existingModel = false;

        _.each(inputsBoxes, function(eachInputBox) {
            newItem.attributes[eachInputBox.id] = eachInputBox.value;
        });

        // existingModel = this.collection.addModel(newItem);
        this.collection.create(newItem.toJSON());
        newItem.save();

        if (!existingModel) {
            this.addItem(newItem);
            this.$('.listTableForNewItem').empty();
        } else {
            alert("This Item has been added. Please add one new item.");
        }
    },

    cancelAddItem: function(e) {
        this.$('.listTableForNewItem').empty();
    },

    render: function() {
        var html='';
        html+=this.template();
        this.$el.find('.listTable').append(html);
        return this;
    }

});