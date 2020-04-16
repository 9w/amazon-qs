'use strict';

var test = require('tape');
var qs = require('../');

test('stringify() arrayFormat: amazon', function (t) {
    t.test('stringifies a querystring object', function (st) {
        st.equal(
            qs.stringify(
                {
                    ShipmentRequestDetails: {
                        ItemList: {
                            Item: [
                                {
                                    OrderItemId: 26969160673646,
                                    Quantity: 1
                                },
                                {
                                    OrderItemId: 61995533938438,
                                    Quantity: 1
                                }
                            ]
                        }
                    }
                },
                { arrayFormat: 'amazon', encode: false, allowDots: true }
            ),
            'ShipmentRequestDetails.ItemList.Item.1.OrderItemId=26969160673646&ShipmentRequestDetails.ItemList.Item.1.Quantity=1&ShipmentRequestDetails.ItemList.Item.2.OrderItemId=61995533938438&ShipmentRequestDetails.ItemList.Item.2.Quantity=1'
        );
        st.equal(
            qs.stringify(
                {
                    ShipmentRequestDetails: {
                        ItemList: {
                            Item: [
                                {
                                    ItemLevelSellerInputsList: {
                                        AdditionalSellerInputs: [
                                            {
                                                AdditionalInputFieldName:
                                                    'HS_CODE',
                                                AdditionalSellerInput: {
                                                    DataType: 'STRING',
                                                    ValueAsString: 12345
                                                }
                                            },
                                            {
                                                AdditionalInputFieldName:
                                                    'ITEM_DESCRIPTION_TRANSLATED',
                                                AdditionalSellerInput: {
                                                    DataType: 'STRING',
                                                    ValueAsString: '架子'
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                },
                { arrayFormat: 'amazon', allowDots: true }
            ),
            'ShipmentRequestDetails.ItemList.Item.1.ItemLevelSellerInputsList.AdditionalSellerInputs.1.AdditionalInputFieldName=HS_CODE&ShipmentRequestDetails.ItemList.Item.1.ItemLevelSellerInputsList.AdditionalSellerInputs.1.AdditionalSellerInput.DataType=STRING&ShipmentRequestDetails.ItemList.Item.1.ItemLevelSellerInputsList.AdditionalSellerInputs.1.AdditionalSellerInput.ValueAsString=12345&ShipmentRequestDetails.ItemList.Item.1.ItemLevelSellerInputsList.AdditionalSellerInputs.2.AdditionalInputFieldName=ITEM_DESCRIPTION_TRANSLATED&ShipmentRequestDetails.ItemList.Item.1.ItemLevelSellerInputsList.AdditionalSellerInputs.2.AdditionalSellerInput.DataType=STRING&ShipmentRequestDetails.ItemList.Item.1.ItemLevelSellerInputsList.AdditionalSellerInputs.2.AdditionalSellerInput.ValueAsString=%E6%9E%B6%E5%AD%90'
        );
        st.end();
    });

    t.end();
});
