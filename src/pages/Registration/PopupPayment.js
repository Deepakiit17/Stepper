import React from 'react'
import { CheckoutProvider, Checkout } from 'paytm-blink-checkout-react'

function PopupPayment({ orderId, txnToken, popup }) {
    // console.log("orderId, txnToken, popup ", orderId, txnToken, popup )
    var config = {
        "root": "",
        "flow": "DEFAULT",
        "data": {
            "orderId": `${ orderId }` /* update order id */,
            "token": `${ txnToken }` /* update token value */,
            "tokenType": "TXN_TOKEN",
            "amount": 536 /* update amount */
        },
        merchant: {
            mid: "uyVSgM89999092630037",
            name: "ILEARNPLACE",
            logo: "",
            redirect: true
        },
        "handler": {
            "notifyMerchant": function (eventName, data) {
                console.log("notifyMerchant handler function called");
                console.log("eventName => ", eventName);
                console.log("data => ", data);
            }
        }
    };
    return (
        <CheckoutProvider config={config} openInPopup={popup} >
            <Checkout />
        </CheckoutProvider>
    )
}

export default PopupPayment