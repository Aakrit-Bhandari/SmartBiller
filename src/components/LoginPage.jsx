// import React,{useState,useEffect} from "react";
import '../Cssfiles/LoginPage.css';
import img1 from '../images/Login_Page/Login_image.jpg'
import img2 from '../images/Login_Page/Google..png'
import img3 from '../images/Login_Page/FaceBook.png'
const LoginPage=()=>
{
    return(
        <section className="Login_box">
            <div className="Login_image_box">
                <img src={img1} alt="login_image"/>
            </div>

            <div className = "Login_content_box">
                <form>
                    <h1>Smart <span>Biller</span></h1>
                    <div className="Login_Third_Party">
                        <button><img src={img2}/> Login with Google</button>
                        <button><img src ={img3}/> Login with FaceBook</button>
                    </div>
                    <p>_______________________________________or_______________________________________</p>
                    <div className="Login_filling_form">
                        <label><input placeholder='EMAIL' /></label><br/>
                        <label><input placeholder='PASSWORD' /></label>
                    </div>
                    <div className="register-link">
                        <button type="submit">Login</button>
                        <p>
                        Don't have an account? <a href="#">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default LoginPage;