import React, { useState } from "react";
import { toast } from "react-toastify";

const APP_ID = 2;
const API_TOKEN = '2f1e3d4c-5b6a-7c8d-9e0f-1a2b3c4d5e6f';
const ADMIN_EMAIL = 'dipakkarmur45@gmail.com';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const headers = {
        "X-API-Token": API_TOKEN,
        "app-id": APP_ID
    };

    const handleSend = async (e) => {
        e.preventDefault()
        try {
            // const res = await fetch("/api/sendemail/getintouch/heerrealtor", {
            //   method: "POST",
            //   headers: {
            //     "Content-Type": "application/json",
            //   },
            //   body: JSON.stringify({ email }),

            // });
            setLoading(true);
            const res = await fetch(
                `http://127.0.0.1:8000/api/send/email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Token": API_TOKEN,
                    "app-id": APP_ID
                },
                body: JSON.stringify(
                    {
                        app_id: APP_ID,
                        sender: ADMIN_EMAIL,
                        sender_name: "LimaaRealty",
                        recipients: [
                            {
                                email: email,
                                name: name,
                            }
                        ],
                        content: {
                            subject: "Welcome to LimaRealty! 🏡 Your Path to the Perfect Property",
    body_text: `
Hi there,  

Thank you for connecting with LimaRealty! 🌟  

We're excited to welcome you to our community and can't wait to help you achieve your real estate goals. Whether you're looking to buy, sell, or invest, our team of dedicated professionals is here to provide personalized service every step of the way.  

Here's what makes LimaRealty different:  
- 🏡 Curated selection of premium properties  
- 📊 In-depth market analysis and investment advice  
- 🤝 Dedicated support from industry experts  
- 🔑 Seamless, stress-free transactions  

Watch your inbox for exclusive property updates tailored to your preferences. Have questions or ready to start your journey? We're just a call or message away!  

Warm regards,  
 
LimaRealty Team  
Your trusted real estate partner  
https://limaarealty.com
`,
    body_html: `
<p>Hi <b>there</b>,</p>  

<p>Thank you for connecting with <b>LimaRealty</b>! 🌟</p>  

<p>We're excited to welcome you to our community and can't wait to help you achieve your real estate goals. Whether you're looking to buy, sell, or invest, our team of dedicated professionals is here to provide personalized service every step of the way.</p>  

<p>Here's what makes LimaRealty different:</p>  
<ul>  
  <li>🏡 Curated selection of premium properties</li>  
  <li>📊 In-depth market analysis and investment advice</li>  
  <li>🤝 Dedicated support from industry experts</li>  
  <li>🔑 Seamless, stress-free transactions</li>  
</ul>  

<p>Watch your inbox for exclusive property updates tailored to your preferences. Have questions or ready to start your journey? We're just a call or message away!</p>  

<p>Warm regards,<br/>  
<p>LimaaRealty Team</p>
<hr style="margin: 30px 0;" />

<div style="font-size: 13px; color: #888; text-align: center;">
  <img src="https://www.limaarealty.com/limma_navbar.png" alt="LimaRealty Logo" width="120" style="margin-bottom: 10px;" />
  <p><b>LimaaRealty</b><br/>
  Your trusted real estate partner<br/>
  <a href="https://limaarealty.com" style="color: #0073b1; text-decoration: none;">www.limaarealty.com</a></p>
</div>
`
                        },

                    })
            }
            )
            const response = await fetch(
                `http://127.0.0.1:8000/api/send/email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-API-Token": API_TOKEN,
                    "app-id": APP_ID
                },
                body: JSON.stringify(
                    {
                        app_id: APP_ID,
                        sender: ADMIN_EMAIL,
                        sender_name: "LimaaRealty",
                        recipients: [
                            {
                                email: ADMIN_EMAIL,
                                name: 'LimaaRealty',
                            }
                        ],
                        content: {
                            subject: `New Contact Message from ${name}`,
                            body_text: `
            Hi Admin,
            
            You've received a new message from the Contact Us page on your website.
            
            Details:
            - Name: ${name}
            - Email: ${email}
            - Subject: ${subject}
            
            Message:
            ${message}
            
            Please respond to the user at your earliest convenience.
            
            Best regards,  
            
          Team LimaaRealty  
          Your trusted partner in real estate  
          https://www.limaarealty.com
              `,
                            body_html: `
            <p>Hi <b>Admin</b>,</p>
            
            <p>You've received a new message from the <b>Contact Us</b> page on your website.</p>
            
            <p><b>Details:</b></p>
            <ul>
              <li><b>Name:</b> ${name}</li>
              <li><b>Email:</b> ${email}</li>
              <li><b>Subject:</b> ${subject}</li>
            </ul>
            
            <p><b>Message:</b></p>
            <blockquote style="border-left: 4px solid #4CAF50; padding-left: 10px; color: #333;">
              ${message}
            </blockquote>
            
            <p>Please respond to the user at your earliest convenience.</p>
            
            <p>Best regards,<br/>
            <p>LimaaRealty Team</p>
              <hr style="margin: 30px 0;" />

     <div style="font-size: 13px; color: #888; text-align: center;">
  <img src="https://www.limaarealty.com/limma_navbar.png" alt="LimaRealty Logo" width="120" style="margin-bottom: 10px;" />
  <p><b>LimaaRealty</b><br/>
  Your trusted real estate partner<br/>
  <a href="https://limaarealty.com" style="color: #0073b1; text-decoration: none;">www.limaarealty.com</a></p>
</div>
              `
                        }


                    })
            }
            )
            if (!res.ok) {
                throw new Error(`Email Subscription Failed: ${res.status} - ${res.statusText}`);
            }

            const result = await res.json();

            // if (res.status === 200 && response.status === 200) {
                toast.success("Your message Recieved, we will contact you soon!");
            // }
            setLoading(false);
        } catch (error) {
            console.error("Subscription Error:", error);
            toast.error("Error sending message. Please try again later.");
            // alert(error);
            setLoading(false);
        }
        setLoading(false);
    }
    return (
        <div
            id="contact"
            className="container  width-[100vw]  flex items-center justify-center flex-col my-10"
        >
            <h3 className="text-4xl font-bold mb-4 text-[#34495E] inline-block">
                Contact us
                <div className=" h-1 w-24 bg-[#3498DB] bottom-0 ml-25 transform -translate-x-1/2 mt-2"></div>
            </h3>
            <div className="container width-full mt-12 px-16 ">

                {/* <p className="mx-auto w-full mt-4 text-center">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p> */}
            </div>
            <div className="flex flex-col lg:flex-row mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
                <div
                    className="flex-[0.9] p-6 h-auto  "

                >
                    <div className="space-y-8">
                        <div
                            className="flex items-center group"

                        >
                            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                                <i className="bi bi-geo-alt"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#3498DB]">Address</h3>
                                <p className="text-gray-600">
                                3020 Quartz LN. 
                                <br />
                                #1 Fullerton, CA 92831
                                </p>
                            </div>
                        </div>
                        <div
                            className="flex items-center group"

                        >
                            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                                <i className="bi bi-telephone"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#3498DB]">Call Us</h3>
                                <p className="text-gray-600">(909) 859-9977</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center group"

                        >
                            <div className="rounded-full w-12 h-12 flex items-center justify-center bg-sky-50 text-sky-500 text-xl mr-4 group-hover:bg-sky-500 group-hover:text-white transition duration-300">
                                <i className="bi bi-envelope"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-[#3498DB]">Email Us</h3>
                                <p className="text-gray-600">limaarealty1@gmail.com</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div
                    className="flex-[1.3] bg-white p-8 h-auto "

                >
                    <form className="space-y-4">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <div
                                className="MainPage"

                            >
                                <label className="block text-black mb-1" htmlFor="name">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-2 border text-black border-gray-300"
                                />
                            </div>
                            <div
                                className="MainPage"

                            >
                                <label className="block text-black mb-1" htmlFor="email">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full text-black p-2 border border-gray-300"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div

                        >
                            <label className="block text-black mb-1" htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full text-black p-2 border border-gray-300"
                            />
                        </div>
                        <div

                        >
                            <label className="block text-black mb-1" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-2 text-black border border-gray-300 h-40 overflow-hidden"
                            ></textarea>
                        </div>
                        <div
                            className="text-center"

                        >
                            <button
                                // type="submit"
                                className={`bg-blue-500 rounded-full text-white py-2 px-4 hover:bg-blue-600 ${loading ? "cursor-not-allowed" : ""}`}
                                disabled={loading}
                                onClick={(e) => handleSend(e)}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        {/* <svg
                      className="animate-spin h-5 w-5 mr-3 text-white"
                      viewBox="0 0 24 24"
                    ></svg> */}
                                        Sending...
                                    </div>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
