import React from 'react';

const PaymentOrder = () => {
  return (
    <>
      <div className='container'>
        <div className='row order-detail'>
            <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
                <div className='row'>
                    <div className='col-md-4 center'>
                        <div className='alert-success order-box'>
                            <i class="fa-solid fa-user"></i>
                        </div>
                    </div>
                    <div className='col-md-8 center'>
                        <h5>
                            <strong>Customer</strong>
                        </h5>
                        <p>
                            Admin Doe
                        </p>
                        <p>
                            admin@gmail.com
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0'>
                <div className='row'>
                    <div className='col-md-4 center'></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default PaymentOrder
