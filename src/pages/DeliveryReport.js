import React from 'react'
import './BillingReport.css'

export default function DeliveryReport() {
  return (
    <div className='container'>
        <div className="card my-4 shadow-sm rounded">
            <div className="card-body">
                <h3>Delivery Report</h3>
            </div>
        </div>

        <div className="shadow p-3 bg-body rounded">
                <div className='tableFixHead'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{backgroundColor: 'white'}} scope="col">Bill Number</th>
                                <th style={{backgroundColor: 'white'}} scope="col">Delivery Number</th>
                                <th style={{backgroundColor: 'white'}} scope="col">Delivery Van Number</th>
                                <th style={{backgroundColor: 'white'}} scope="col">Driver Contact Number</th>
                                <th style={{backgroundColor: 'white'}} scope="col">Customer Name</th>
                                <th style={{backgroundColor: 'white'}} scope="col">Delivery State</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>11</td>
                                <td>VA-0013</td>
                                <td>+94 7381 37821</td>
                                <td>Sachin Rasangika</td>
                                <td><span className="badge bg-primary">Created</span></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>22</td>
                                <td>PC-9314</td>
                                <td>+94 0887 38123</td>
                                <td>Thisun Silva</td>
                                <td><span className="badge bg-success">Delivered</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button className='btn btn-success mt-4'>Export to CSV</button>
    </div>
  )
}
