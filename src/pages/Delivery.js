import React from 'react'
import * as FaIcons from 'react-icons/fa';
import './Delivery.css'

export default function Delivery() {
  return (
    <div>
        <div className="card mx-3 my-3 shadow-sm rounded">
            <div className="card-body">
                <h3>Delivery Window</h3>
            </div>
        </div>

        <div>
            <div className="row mx-3 my-3">
                <div className='col-6'>
                    <div className="shadow p-3 bg-body rounded">
                        <form>
                            <div className="mb-3">
                                <label for="billNumber" className="form-label">Bill Number</label>
                                <input type="number" min="0" className="form-control" id="billNumber" name="billNumber" placeholder="" required/>
                                <button className='my-3 btn btn-success'><FaIcons.FaSearchengin></FaIcons.FaSearchengin></button>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-6'>
                                        <label for="deliveryNumber" className="form-label">Delivery Number</label>
                                        <input type="text" className="form-control" id="deliveryNumber" name="deliveryNumber"/>
                                    </div>
                                    <div className='col-6'>
                                        <label for="deliveryVanNumber" className="form-label">Delivery Van Number</label>
                                        <input type="text" className="form-control" id="deliveryVanNumber" name="deliveryVanNumber"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-6'>
                                        <label for="driverNumber" className="form-label">Driver Contact Number</label>
                                        <input type="text" className="form-control" id="driverNumber" name="driverNumber"/>
                                    </div>
                                    <div className='col-6'>
                                        <label for="deliveryState" className="form-label">Delivery State</label>
                                        <select id="deliveryState" className="form-select">
                                            <option value="Created">Created</option>
                                            <option value="Ready">Ready</option>
                                            <option value="On Delivery">On Delivery</option>
                                            <option value="Delivered">Delivered</option>
                                            <option value="Cancelled">Cancelled</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className='col-6'>
                                        <label for="customerName" className="form-label">Customer Name</label>
                                        <input type="text" className="form-control" id="customerName" name="customerName"/>
                                    </div>
                                    <div className='col-6'>
                                        <label for="customerContact" className="form-label">Customer Contact Number</label>
                                        <input type="text" className="form-control" id="customerContact" name="customerContact"/>
                                    </div>
                                </div>
                                <div className='mb-3'>
                                    <label for="customerAddress" className="form-label">Customer Address</label>
                                    <input type="text" className="form-control" id="customerAddress" name="customerAddress"/>
                                </div>
                                <div className='row mb-3'>
                                    <div className='col-6'>
                                        <label for="DeliveryCharge" className="form-label">Delivery Charge</label>
                                        <input type="text" className="form-control" id="DeliveryCharge" name="DeliveryCharge"/>
                                    </div>
                                    <div className='col-6'>
                                        <label for="submitBtn" style={{color: 'white'}} className="form-label">...</label>
                                        <button type="submit" id='submitBtn' className="btn btn-primary form-control">OK</button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
                <div className='col-6'>
                    <div className="shadow p-3 bg-body rounded">
                        <div className="container">                      
                            <div className="row text-center justify-content-center mb-5">
                                <div className="col-xl-6 col-lg-8">
                                    <h2 className="font-weight-bold">Delivery State</h2>
                                    <p className="text-muted">Order Delivery State can be seen from here</p>
                                </div>
                            </div>

                            <div className='row' style={{textAlign: "center"}}>
                                <FaIcons.FaExclamationTriangle style={{color: 'red'}}></FaIcons.FaExclamationTriangle>
                                <h3 className='text-muted'>No Delivery Details Available</h3>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                        <div className="timeline-step">
                                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                                                <div className="inner-circle"></div>
                                                <p className="h6 mt-3 mb-1">2003</p>
                                                <p className="h6 text-muted mb-0 mb-lg-0">Favland Founded</p>
                                            </div>
                                        </div>
                                        <div className="timeline-step">
                                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                                                <div className="inner-circle"></div>
                                                <p className="h6 mt-3 mb-1">2004</p>
                                                <p className="h6 text-muted mb-0 mb-lg-0">Launched Trello</p>
                                            </div>
                                        </div>
                                        <div className="timeline-step">
                                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                                                <div className="inner-circle"></div>
                                                <p className="h6 mt-3 mb-1">2005</p>
                                                <p className="h6 text-muted mb-0 mb-lg-0">Launched Messanger</p>
                                            </div>
                                        </div>
                                        <div className="timeline-step">
                                            <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                                <div className="inner-circle"></div>
                                                <p className="h6 mt-3 mb-1">2010</p>
                                                <p className="h6 text-muted mb-0 mb-lg-0">Open New Branch</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
