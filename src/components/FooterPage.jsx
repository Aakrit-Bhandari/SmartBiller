import '../Cssfiles/FooterPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <section className="Footer_block">
            <div className="Footer_block_aboutus content">
                <h1>About Us</h1>
                <p><b>Smart Billing</b> a growing range software from <b> Aaku Technology Ltd</b>, delivering innovative billing solutions.</p>
                <p><b>Inbuild Inventory Management</b>, invoice generator introduced in the year 2024</p>
                <p>Winner of The <b>G15 Software Product</b> of the year Technology Reseller Awards 2024</p>
                <p><b>Email and sms</b> automated software for reminders of payment and dues.</p>
            </div>
            <div className="Footer_block_usefulinfo">
                <h1>Useful Info</h1>
                <div className="usefulinfo">
                    <div>
                        <p>Telecom</p>
                        <p>Managed Service Providers</p>
                        <p>Cloud Solution Providers</p>
                        <p>Managed Print Services</p>
                        <p>ISPs</p>
                        <p>Other Sectors</p>
                    </div>
                    <div>
                        <p>Awards and Accreditations</p>
                        <p>Testimonials</p>
                        <p>Case Studies</p>
                        <p>Blog</p>
                        <p>Cookie Policy</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="Footer_block_businessinfo">
                <h1>Business Info</h1>
                <p>Armstrong Building, Magellean view, Chitkara,140401, Punjab</p>
                <span>Telephone: 9366816595</span>
                <p>
                    <FontAwesomeIcon icon={faEnvelope} /> Email us&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faLinkedin} /> Connect with us&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faGithub} /> Github
                </p>
                <p>© 2024 Aaku Technologies Ltd</p>
            </div>
        </section>
    );
}