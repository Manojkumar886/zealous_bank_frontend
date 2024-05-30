import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


export const Loginpage = () => {
    return (
        <>
            <div className='row justify-content-center mt-5'>
                <div className='col-5'>
                    <div className='card'>
                        <h4 className='text-center mt-5 text-decoration-underline text-primary'> WELCOME TO ZEALOUS BANK</h4>
                        <div className='form-group mx-4 my-2'>
                            <label className='form-label'>CLIENT NUMBER</label>
                            <input className='form-control'
                                type='number'
                                name="accountNumber"
                                placeholder='User id (ACCNO) ' />
                        </div>
                        <div className='form-group mx-4 my-2'>
                            <label className='form-label'>PASSWORD</label>
                            <input className='form-control'
                                type='password'
                                name="password"
                                placeholder='ADMIN PASSWORD' />
                        </div>
                        <div className='row justify-content-center mt-3 mb-1'>
                            <button className='btn btn-outline-primary col-5 '
                            >LOGIN</button>
                        </div>
                        <div class="d-flex justify-content-around align-items-center mb-1 mt-3">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                                <label class="form-check-label" for="form1Example3"> Remember me </label>
                            </div>
                            <a href="">NEW USER</a>
                        </div>
                        <div class="d-flex justify-content-center text-center mt-4 pt-1">
                            <a href="#!"><i class="bi bi-facebook  "></i></a>
                            <a href="#!"><i class="bi bi-whatsapp ms-5"></i></a>
                            <a href="#!"><i class="bi bi-github ms-5"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}