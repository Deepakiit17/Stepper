import React, { useState } from 'react'
import Button from "@mui/material/Button";
import { getPaymentToken } from '../../action/isplAction';
import PopupPayment from './PopupPayment';
import { TOAST_LOADING } from '../../utils';

function Paytm({ team_id, totalAmount, handleNext }) {
    const [orderId, setOrderID] = useState()
    const [txnToken, setTxnToken] = useState()
    const [popup, setPopup] = useState(false);
    const initiatePayment = () => {
        TOAST_LOADING('Please wait...')
        getPaymentToken({ team_id: team_id, amount: totalAmount })
            .then((response) => {
                if (response.status === 200) {console.log(" response.data",  response.data)
                    const { orderId, txnToken } = response.data;
                    setOrderID(orderId)
                    setTxnToken(txnToken)
                    setTimeout(() => {
                        setPopup(true)
                    }, 500)
                    // setTimeout(()=>handleNext(), 2000)
                    
                }
            })
            .catch(function (error) { console.log(error) });
    }

    return (
        <>
            {popup ? <PopupPayment orderId={orderId} txnToken={txnToken} popup={popup} /> : null}
            <Button variant="contained" onClick={() => initiatePayment()}>Pay Now</Button>
        </>
    )
}

export default Paytm