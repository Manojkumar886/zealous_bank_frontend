import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const Accountform = () => {
    return (
        <>
            <div className="container-fluid mt-2 ">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-0 col-sm-12 shadow-lg p-3 ">
                        <h1 className="text-primary text-uppercase fw-bolder text-center ">
                            <br></br>CREATE YOUR ACCOUNT</h1>
                        <p className='text-center fw-bold'>Create an account  to view and  manage your transaction details</p>
                        <div className='container'>
                            <div className="form group mt-3">
                                <label>ACCOUNT NUMBER</label>
                                <input type="number"
                                    name="accountNumber"
                                    className="form-control"
                                />
                            </div>
                            <div className="form group mt-3">
                                <label>ACCOUNT HOLDER NAME</label>
                                <input type="text"
                                    name="accountHoldername"
                                    className="form-control"
                                />
                            </div>
                            <div className="form group mt-3">
                                <label>IFSC CODE</label>
                                <input type="text"
                                    name="accountIfsccode"
                                    className="form-control"
                                />
                            </div>
                            <div className="form group mt-3">
                                <label>ACCOUNT BALANCE</label>
                                <input type="text"
                                    name="accountBalance"
                                    placeholder="0.0"
                                    className="form-control"
                                />
                            </div>
                            <div className="form group mt-3">
                                <label>PASSWORD</label>
                                <input type="text"
                                    name="password"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>ACCOUNT HOLDER PLACE</label>
                                <select name="accountHolderplace"
                                    className="form-select mt-1">
                                    <option selected hidden>Select BANK LOCATION</option>
                                    <option>RASIPURAM</option>
                                    <option>NAMAKKAL</option>
                                    <option>TRICHENGODE</option>
                                    <option>ELACHIPALAYAM</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="form group mt-3">
                                <label>CONTACT NO</label>
                                <input type="number"
                                    name=" accountHoldercontactno"
                                    className="form-control"
                                />
                            </div>
                            <div className="row justify-content-around mt-4">
                                <button className="btn btn-success col-3 ms-3" >SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}