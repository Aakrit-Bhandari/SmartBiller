import React, { useEffect, useRef } from "react";
import video1 from "../images/LandingPage/videofile.mp4";
import img1 from "../images/LandingPage/billingImage.jpg";
import Footer from "./FooterPage";
import '../Cssfiles/LandingPage.css'
const Homepage=()=> {
    const videoRef=useRef(null);
    useEffect(()=>{
        const handleVideoEnd=()=>{
            if(videoRef.current){
                videoRef.current.currentTime=0;
                videoRef.current.play();
            }
        }
        const videoElement = videoRef.current;
        if(videoElement){
            videoElement.addEventListener("ended",handleVideoEnd);
        }
        return()=>{
            if(videoElement){
                videoElement.removeEventListener("ended",handleVideoEnd);
            }
        }
    },[]);
    return (
        <>
        <section>
            <div className="Landing_video_div">
                <video ref={videoRef} src={video1} autoPlay={true}/>
            </div>
            <div className="Landing_page_block1 Aligning">
                <div className="block1_heading">
                   <h1> Has your time become eclipsed by inefficient data processing?
                    Are billing errors losing you customers as well as hours?</h1>
                </div>
                <div className="block1_paragraph">
                    <p>
                    Inventory Management, Dynamic Invoice Generator, Mailing and SMS System, Payment Processing, Expense Tracker, and Customer Data Store. 
                    Whether you're in the UK or overseas, Intelligent Billing is here to offer you automation and simplicity without compromising on accuracy and quality. 
                    </p>
                </div>
            </div>
            <div className="Landing_page_block2">
                <div className="block2_content_section">
                    <h1>
                        Management,Invoice Generator, Mailing, smarter billing - all from 
                        one platform
                    </h1>
                    <p>
                        Smart Biller is a super cool software design that lets you manage your Inventory, dynamically generates a invoice through mailing and sms, payment processing for quick grabbing deals,expense tracker
                    </p>
                    <p>
                    Combining a can-do attitude and many years’ experience, we continually push the boundaries of billing technology, delivering powerful and accurate solutions for your business.
                    </p>
                </div>
                <div className="block2_picture_section">
                <p><i>Choose what makes your life easier, not what seems to please ya. Prioritize your peace, let stress decrease. Seek what brings you joy, not just a fleeting ploy.</i></p>
                    <img src={img1}/>
                </div>
            </div>
            <div className="Landing_page_block4">
                <div className="block4_box1 block_boxModel">
                    <h1>Inventory Management</h1>
                    <p>Assist you with your stocks. What to bring what not to.</p>
                </div>
                <div className="block4_box2 block_boxModel">
                    <h1>Invoice Generator</h1>
                    <p>Automaticaly Generates an invoice based on purchase made </p>
                </div>
                <div className="block4_box3 block_boxModel">
                    <h1>Mailing & SMS</h1>
                    <p>Sends invoices,payment reminders, and promotional messages via Email & SMS.</p>
                </div>
                <div className="block4_box4 block_boxModel">
                    <h1>Payment Processing</h1>
                    <p>Payment gate to assist with you while doing any sort of payment.</p>
                </div>
                <div className="block4_box5 block_boxModel">
                    <h1>Expense Tracker</h1>
                    <p>Monitor your record business expenses, provides detailed reports on spending patterns and budgeting.</p>
                </div>
                <div className="block4_box6 block_boxModel">
                    <h1>Customer Data Store</h1>
                    <p>Centralized database to store client information, transcation, history, preferences.</p>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
}
export default Homepage;
