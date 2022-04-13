import React from 'react';
import './BillingReport.css'

function BillingReport() {

    return (
        <>
            <div className='container'>
                <div className="card my-4 shadow-sm rounded">
                    <div className="card-body">
                        <h3>Billing Report</h3>
                    </div>
                </div>
                    
                <div className="shadow p-3 bg-body rounded">
                    <div className='tableFixHead'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{backgroundColor: 'white'}} scope="col">Bill Number</th>
                                    <th style={{backgroundColor: 'white'}} scope="col">Contact Number</th>
                                    <th style={{backgroundColor: 'white'}} scope="col">Items</th>
                                    <th style={{backgroundColor: 'white'}} scope="col">Total Amount</th>
                                    <th style={{backgroundColor: 'white'}} scope="col">Date</th>
                                    <th style={{backgroundColor: 'white'}} scope="col">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                    <td>Sprite</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <button className='btn btn-success mt-4'>Export to CSV</button>
            </div>
        </>
    );
}

export default BillingReport;