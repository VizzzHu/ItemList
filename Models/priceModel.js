/**
 * Created by xianlin on 7/31/14.
 */

// Define a Todo Model
var PriceList = Backbone.Model.extend({
    defaults: {
        itemEng: '',
        itemCh:'',
        size: '',
        type:'',
        quantity:1,
        shipping:8,
        bPrice:0,
        sPrice:0,
        dPrice:0
    },
    url: 'PriceList',

    initialize: function() {
        this.on('change', function() {
            console.log('-Values for this model have changed');
        })
    },

    // represents what the attributes would
    // be after set()/save()
    validate: function(attr) {
        if (!attr.itemEng) {
            return 'I need your item name';
        }
    }
});






