/**
 * Created by xianlin on 8/6/14.
 */
var PriceView = Backbone.View.extend({
    el: 'body',

    initialize: function() {
        this.render(); // collection render
    },

    events: {
        "click .add": "addNewItem",
        "click .save": "saveItem",
        "click .cancel": "cancelAddItem"
    },

    // add one model render one
    addItem: function(model) {
        var newItemView = new ModelView({model: model})
            .render();
    },

    // add one new item with input box
    addNewItem: function(e) {
        this.template = _.template($('#item-new').html());
        this.addNewItemRender();
    },

    // save item by adding model
    saveItem: function(e) {
        var newItem = new PriceList();
        var saveItem = new PriceList();
        var inputsBoxes = this.$('input');
        var existingModel = false;

        _.each(inputsBoxes, function(eachInputBox) {
            newItem.attributes[eachInputBox.id] = eachInputBox.value;
        });

         existingModel = this.collection.addModel(newItem);

        if (!existingModel) {
            this.addItem(newItem);
            this.$('.listTableForNewItem').empty();
        } else {
            alert("This Item has been added. Please add one new item.");
        }
    },

    // cancel the added item to be saved
    cancelAddItem: function(e) {
        this.$('.item-new-tr').empty();
    }, 

    // collection render by rendering each model
    render: function() {
        for(var i=0; i<this.collection.models.length; i++) {
            this.addItem(this.collection.models[i]);
        } 
    },

    // render the added new row by clicking "New" button
    addNewItemRender: function() {
        var html='';
        html+=this.template();
        this.$el.find('.listTable').append(html);
        return this;
    }
});