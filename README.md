# qs-amazon
Customed qs module for amazon query stringify

Check amazon querystring at [Docs](http://docs.developer.amazonservices.com/en_US/merch_fulfill/MerchFulfill_CreateShipment.html) > Examples > Example query request > Show example code (click)

The qs module was proted from https://github.com/ljharb/qs

## Usage 
```javascript
const qs = require('qs-amazon');
const assert = require('assert');

const str = qs.stringify(
    {
        ShipmentRequestDetails: {
            ItemList: {
                Item: [
                    {
                        OrderItemId: 26969160673646,
                        Quantity: 1,
                    },
                ],
            },
        },
    },
    { arrayFormat: 'amazon', encode: false, allowDots: true }
);
assert.equal(str, 'ShipmentRequestDetails.ItemList.Item.1.OrderItemId=26969160673646&ShipmentRequestDetails.ItemList.Item.1.Quantity=1');
```