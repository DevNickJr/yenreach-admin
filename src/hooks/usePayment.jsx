import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const Payment = ({configs={}}) => {
  const config = {
    public_key: 'FLWPUBK_TEST-8ead4d33f736260c924395846da3352c-X',
    tx_ref: Date.now(),
    amount: 10,
    currency: 'NGN',
    payment_options: 'card, mobilemoney, ussd',
    customer: {
      email: 'user4@gmail.com',
       phone_number: '07033824091',
      name: 'john Grow',
    },
    customizations: {
      title: 'Test Payment',
      description: 'Payment for Business Sub',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
    ...configs,
  };

  const handleFlutterPayment = useFlutterwave(config);

  return { handleFlutterPayment, closePaymentModal }

}


export default Payment;




//   return (
//     <div className="App">
//      <h1>Hello Test user</h1>

//       <button
//         onClick={() => {
//           handleFlutterPayment({
//             callback: (response) => {
//                console.log(response);
//                 closePaymentModal() // this will close the modal programmatically
//             },
//             onClose: () => {},
//           });
//         }}
//       >
//         Payment with React hooks
//       </button>
//     </div>
//   );