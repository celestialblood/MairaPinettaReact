import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import ContactForm from "./ContactForm/ContactForm";
import "./Contact.css"

const Contact = () => {

    return (
 

        <main class="main_contact">

            <ContactForm/>

        </main>
      
    );
};

export default Contact;

