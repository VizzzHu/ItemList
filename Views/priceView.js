/**
 * Created by xianlin on 8/6/14.
 */
var PriceView = Backbone.View.extend({
    el: 'body',

    initialize:function() {
        this.template = _.template($('#item-new').html());
        for(var i=0;i<this.collection.models.length;i++) {
            this.addItem(this.collection.models[i]);
        }
    },

    events: {
        "click .add": "addNewItem",
        "click .save" : "saveItem",
        "click .cancel": "cancelAddItem"
    },

    addItem: function(model) {
        var newItemView = new PriceTableView({model: model})
            .render();
    },

    addNewItem: function(e) {
        console.log('Click to add new item!');
        this.render();
    },

    saveItem: function(e) {
        var newItem = new PriceList();
        var inputsBoxes = this.$('input');
        var existingModel = false;

        _.each(inputsBoxes, function(eachInputBox) {
            newItem.attributes[eachInputBox.id] = eachInputBox.value;
        });

        existingModel = this.collection.addModel(newItem);

//        _.each(this.collection.models, function(eachModel) {
//            if (_.isEqual(newItem.attributes, eachModel.attributes)) {
//               existingModel = true;
//            };
//        });

        if (!existingModel) {
 //           this.collection.add(newItem);
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
        this.$el.find('.listTableForNewItem').append(html);
        return this;
    }

});