import React from 'react'
import { useState } from 'react';
import { Collapse, Form } from 'react-bootstrap'
import HotelViewTable from './HotelViewTable';


export default function CurdHotel() {
    const [open1, setOpenAddHotel] = useState(false);
    const [open2, setOpenRemoveHotel] = useState(false);
    const [open3, setOpenUpdateHotel] = useState(false);
    const [open4, setOpenViewHotel] = useState(false);

    return (
        < >
        <div id='curdpage'>
            <button
                className="btn btn-outline-primary btn-lg my-5 my-sm-0"
                onClick={() => setOpenAddHotel(!open1)}
                aria-controls="addhotel"
                aria-expanded={open1}
            >
                Add Hotel
            </button>
            <Collapse in={open1}>
                <div id="addhotel">
                    <form className='my-5, border border-primary' style={{ padding: '50px' }}>
                        <div className='container'>

                            <div className='row'>
                                <div className='col-2'>
                                    <label>Hotel Id</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hotelid'></input>
                                </div>

                                <div className='col-2'>
                                    <label>Hotel Name</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hotelname'></input>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-2'>
                                    <label>Hotel Address</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hoteladdress'></input>
                                </div>

                                <div className='col-2'>
                                    <label>Hotel Price</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hotelprice'></input>
                                </div>
                                <div className='col-2'>
                                    <label>Hotel Rating (?/5)</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hotelrating'></input>
                                </div>
                                <div className='col-2'>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Collapse>


            <button
                className="btn btn-outline-primary btn-lg my-5 my-sm-0"
                onClick={() => setOpenRemoveHotel(!open2)}
                aria-controls="remove"
                aria-expanded={open2}
            >
                Remove Hotel
            </button>
            <Collapse in={open2}>
                <div id="remove">

                    <form className='my-5, border border-primary' style={{ padding: '50px' }}>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3'>
                                    <label>Enter Hotel Id to Remove Hotel</label>
                                </div>

                                <div className='col-3'>
                                    <input type="text" name='hotelremoveid'></input>
                                </div>

                                <div className='col-3'>
                                    <button type="submit" class="btn btn-primary">Remove</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </Collapse>


            <button
                className="btn btn-outline-primary btn-lg my-5 my-sm-0"
                onClick={() => setOpenUpdateHotel(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
            >
                Update Hotel
            </button>
            <Collapse in={open3}>
                <div id="example-collapse-text">

                    <form className='my-5, border border-primary' style={{ padding: '50px' }}>
                        <div className='container'>

                            <div className='row'>
                                <div className='col-2'>
                                    <label><b>Hotel Id to be Updated</b></label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hotelid'></input>
                                </div>
                            </div>

                            <div className='row'>

                                <div className='col-2'>
                                    <label>Hotel Name</label>
                                </div>

                                <div className='col-4'>
                                    <input type="text" name='hotelname'></input>
                                </div>

                                <div className='col-2'>
                                    <label>Hotel Address</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hoteladdress'></input>
                                </div>

                            </div>

                            <div className='row'>
                                <div className='col-2'>
                                    <label>Hotel Price</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hotelprice'></input>
                                </div>

                                <div className='col-2'>
                                    <label>Hotel Rating (?/5)</label>
                                </div>
                                <div className='col-4'>
                                    <input type="text" name='hotelrating'></input>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">Submit</button>

                        </div>
                    </form>
                </div>
            </Collapse>

<HotelViewTable/>


            </div>
        </>
    );
}

