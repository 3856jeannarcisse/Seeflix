import Header from"../Component/Header";
import Footer from"../Component/Footer";
import "./Contact.css"

function Contact(){
return(
    <>
<Header
    heroTitle="Contact Us"
    heroTagline="We are here to help!!"
    heroButtonLink="Get in touch"
    showSocials={true}
    
    
/>
    
    
    <div className="contact-01">
        <h1>Get in touch</h1>
        <p>Fill out this form and we will get back to you as soon as possible</p>
    </div>

<form className="Contact-form">
<label >Name:</label>
<input type="text"placeholder="Enter your Name"required />

<label >Email:</label>
<input type="Email"placeholder="Enter your Email"required />

<label >Password:</label>
<input type="Password"placeholder="Enter your Password"required />

<label >Message:</label>
<textarea  placeholder="Your message here.."rows="5"required ></textarea>

<button type="Submit">Send</button>



</form>
<Footer/>
    </>
)

}
export default Contact;