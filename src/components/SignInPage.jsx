import img1 from '../images/Signin_Page/Signin.png';
import img2 from '../images/Login_Page/Google..png'
import '../Cssfiles/SigninPage.css';

const SignInPage=()=>
{
    return(
        <section className="Signin_box">
            <div className="Signin_image_box">
                <img src={img1} alt="signin_image"></img>
            </div>
            <form>
                <div className="Signin_content_box">
                <h1>Smart <span>Biller</span></h1>
                    <div className="Sign_filling_form">
                        <label><input placeholder='NAME'/></label><br/>
                        <label><input placeholder='EMAIL'/></label><br/>
                        <label><input placeholder='PASSWORD'/></label>
                        <p className="Sign_para">By continuing, you are agreeing out terms and condition</p>
                        <button type="submit">Signin</button>
                    </div>
                <div className="Sign_Third_Party">
                    <button><img src={img2}/> Login with Google</button>
                </div>
                </div>
            </form>
        </section>
    );
}
export default SignInPage;