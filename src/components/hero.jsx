import React, { Component } from "react";
import nimaMinified from '../assets/images/nimaMinified.png';
import cv from '../assets/files/cv.pdf';
import '../styles/hero.main.css';
import StackBadge from "./stackBadge";

class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <img src={nimaMinified} alt="Me" />
                <div className="top-section">
                    <h1 className="intro">سلام، من نیما هستم</h1>
                    <h3 className="job-title">Node Js توسعه دهنده بک اند با</h3>
                </div>
                <div className="badges">
                    <StackBadge text={"Mongo"}/>
                    <StackBadge text={"Express"}/>
                    <StackBadge text={"NodeJS"}/>
                </div>
                <div className="buttons">
                    <a href="../assets/files/cv.pdf" download={cv} className="download-cv-btn">
                        دانلود رزومه
                    </a>
                    <a href="#telegram" className="contact-me-btn">
                        ارتباط با من
                    </a>
                </div>
            </section>
        )
    }
}

export default Hero;
