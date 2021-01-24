import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
class LoginComponent extends Component {
    state = {  }
    render() { 
        return (
            // <MDBContainer>
            //     <MDBRow>
            //         <MDBCol md="6">
            //         <form>
            //             <p className="h5 text-center mb-4">Sign in</p>
            //             <div className="grey-text">
            //                 <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
            //                 success="right" />
            //                 <MDBInput label="Type your password" icon="lock" group type="password" validate />
            //             </div>
            //             <div className="text-center">
            //                 <MDBBtn>Login</MDBBtn>
            //             </div>
            //         </form>
            //         </MDBCol>
            //     </MDBRow>
            // </MDBContainer>
            <div>
                <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
          );
    }
}
 
export default LoginComponent;