/**
 * Created by xianlin on 8/7/14.
 */
var PriceLists = Backbone.Collection.extend({
    Model: PriceList,
    url: '#',
    addModel: function(model) {
        var existingModel = false;

        // if the new model doesn't exist before, then add
        _.each(this.models, function(eachModel) {
            if (_.isEqual(model.attributes, eachModel.attributes)) {
                existingModel = true;
            };
        });

        if (!existingModel) {
            this.add(model);
        }
        return existingModel;
    }

});