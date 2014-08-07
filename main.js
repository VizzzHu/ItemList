/**
 * Created by xianlin on 8/5/14.
 */

//create model
var priceList1 = new PriceList({
    itemEng: 'estee lauder ANR eye cream',
    itemCh: '雅诗兰黛眼霜',
    size: '0.5oz',
    type:'cosmetics'
});

var priceList2 = new PriceList();
priceList2.set({
    itemEng:'estee lauder ANR serum',
    itemCh: '雅诗兰黛精华',
    size: '6.7oz',
    type: 'cosmetics'
});

var priceList3 = new PriceList();
priceList3.set({
        itemEng: 'estee lauder lipstick',
         itemCh: '雅诗兰黛口红',
         size: '0.8oz',
         type: 'cosmetics'
});

//create Collections
var priceLists = new PriceLists ([
    priceList1,
    priceList3,
    priceList2
]);

// create views
var itemView = new PriceView({collection: priceLists});



