import {useState } from "react";

import  'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //iconos font awesome 
import { faMagnifyingGlass, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import "./ContactForm.css"

import { getFirestore, collection, addDoc} from 'firebase/firestore'


const defaultForm = {name: '', email:'', message:''};

const ContactForm = () => {

    const[form, setForm] = useState(defaultForm); //seteo los valores a defined para que react no tire error

    const [id, setId] = useState()

    const changeHandler = (ev) => {
        // si hay un evento en el changeHandler:
        //cambio el estado del form con sugarsyntax y reorganizo la info del form en un objeto
        //...spreadoperator
        //[porque la clave es dinamica corchetes]
        setForm({...form, [ev.target.name]: ev.target.value});
    }

    const submitHandler =(ev) =>{
        //con submutHandler envio la info a firestore
        ev.preventDefault();
        const db = getFirestore(); //traigo la db y la collection
        const contactFormCollection = collection(db, "contactform");
        //addDoc llevo info (en vez de getDoc traer info) y le meto el contenido del estado de form a firestore
        addDoc(contactFormCollection, form).then((snapshot) => {

            setId(snapshot.id); //seteo el id del form
            //puedo poner una ruta link conectado a un clickHandler en el button enviar que dispare el form que acabo de crear por el snapshot.id
        })
    };

    //reseteo para enviar otro mensaje Y vacio el Id
    const resetHandler = () => {
        setForm(defaultForm);
        setId ("");
    }

    return (
        // ternaria para mostrar o no el form segun si hay id
        <div>  
            {id ? (
            <div>Thank you for submitting your message, your id number is {id}<br/> 
                 <button onClick={resetHandler}>Send another message</button>
            </div>
            ):(
                <form onSubmit = {submitHandler}>   

                    <div class="contact-form"> 
                
                        <div class="Name"> 
                            <label htmlFor="name"></label>
                            <input type="text" name="name" id="name" 
                            value={form.name} 
                            onChange={changeHandler}
                            />                     
                            {/* escucho cuando cambia el input con changeHandler y modifico el value pasando la info de los input a un objeto con use state */}

                        </div>
                    
                        <div class ="Email"> 
                            <label htmlFor="email"></label>
                            <input type="email" name="email" id= "email"
                            value={form.email}
                            onChange={changeHandler}
                            /> 
                        </div>  

                        <textarea name="message" id="message" cols="30" rows="10"
                        value={form.message}
                        onChange={changeHandler}
                        ></textarea> 
                    
                        <button class="button-contact" type="send"> SEND </button>
                    
                    </div>
                    <div class="contact-list">
                        <ul>
                            <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place"><a href="BuenosAires" title="Location">Buenos Aires</a></span></i></li>
                            
                            <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:+54-9-1122489039" title="Contact me">tel: +54-9-1122489039</a></span></i></li>
                            
                            <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Email me ">mairapinetta@gmail.com</a></span></i></li>
                        </ul>
                    </div>  
                
                </form>
            )};

        </div>

      
    );
};

export default ContactForm;

