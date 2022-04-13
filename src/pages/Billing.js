import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';

function Billing() {
  return (
      <>
        <div className=''>
            <div className="card mx-3 my-3 shadow-sm rounded">
                <div className="card-body">
                    <h3>Billing Window</h3>
                </div>
            </div>

            <div className=''>
                <div className="row mx-3 my-3">
                    <div className='col-5'>
                        <div className="shadow p-3 bg-body rounded">
                            <h4 className='my-3 mx-2'>Product</h4>

                            <div className='px-4'>
                                <form>
                                    <div className="mb-3">
                                        <label for="billNumber" className="form-label">Bill Number</label>
                                        <input type="number" className="form-control" id="billNumber"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="contactNumber" className="form-label">Contact Number</label>
                                        <input type="text" className="form-control" id="contactNumber"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="items" className="form-label">Items</label>
                                        <select id="items" className="form-select">
                                            <option value="">Select an Item</option>
                                            <option value="Sprite">Sprite</option>
                                            <option value="Snack Bite">Snack Bite</option>
                                            <option value="Chocolate">Chocolate</option>
                                            <option value="Apple">Apple</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label for="quantity" className="form-label">Quantity</label>
                                        <input type="number" min="1" step="1" className="form-control" id="quantity" name="quantity" placeholder=""/>
                                      </div>
                                      <div className="mb-3">
                                        <label for="price" className="form-label">Price</label>
                                        <input type="number" min="0.0" step="0.01" className="form-control" id="price" name="price" placeholder="0.0"/>
                                      </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>

                        <div className="shadow p-3 my-4 bg-body rounded">
                            <div>
                                <h4>Bill Options</h4>
                                <div>
                                    <form>
                                        <div className="mb-3">
                                            <label for="discount" className="form-label">Discount Percentage</label>
                                            <input type="number" min="0" className="form-control" id="discount" name="discount" placeholder="0"/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Calculate</button>
                                        <button type="button" className="btn btn-danger mx-3">Remove</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7">
                        {/* <h4 className='my-3 mx-2'>Bill Details</h4> */}
                        <div className="shadow p-3 bg-body rounded">
                            <table className="table">
                                <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Sprite</td>
                                        <td>2</td>
                                        <td>400</td>
                                        <td>
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    {/* <button className="fa fa-plus btn btn-light" style={{color: "green"}}></button> */}
                                                    <FaIcons.FaPlus style={{cursor: "pointer", color: "green"}}/>
                                                </li>
                                                <li className="list-inline-item">
                                                    {/* <button className="fa fa-minus btn btn-light" style={{color: "red"}}></button> */}
                                                    <FaIcons.FaMinus style={{cursor: "pointer", color: "red"}}/>
                                                </li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td colspan="3">
                                        <h3>Total Price: </h3>
                                    </td>
                                        <td><b>580.0</b></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}

export default Billing;