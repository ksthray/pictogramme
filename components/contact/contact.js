import React, {useState} from "react"

import styled from "styled-components"

import {Form, FormGroup, Label, Input } from 'reactstrap';

import {firebase} from "../../config/firebase"
import { Adresse } from "../panneau";

const Button = styled("button")`
    width: 250px;
    padding: 7px;
    background-color: ${({theme}) => theme.primaryRyde};
    border-radius: 20px;
    text-transform: uppercase;
    color: white;
    border: none;
    transition: all ease-in-out 0.3s;

    &:hover{
        background-color: ${({theme}) => theme.primaryRydeHover};
    }
    &:focus{
        border: none;
        outline: none;
    }
`
const ContactStyle = styled("section")`
    width: 100%;
    display: grid;
    grid-template-columns: 60% 30%;
    grid-gap: 20px;

    .block-formulaire{
        h2{
            font-size: 1.5rem;
            color: ${({theme}) => theme.primaryRyde};
        }
    }
`

const Bar = styled("div")`
    width: 10%;
    height: 3px;
    background: ${({theme}) => theme.primaryRyde};
    margin-bottom: 25px;
`

const Contact = () => {
    const database = firebase.firestore()
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        database.collection("contacts").add({
            nom: nom,
            email: email,
            message: message
        }).then(() => {
            alert("Message envoyé avec succès")
        }).catch((err) => {
            alert(err.message)
        })

        setNom("")
        setEmail("")
        setMessage("")
    }
    return (
        <ContactStyle>
            <div className="block-formulaire">
                <h2>Un simple message peut faire des grandes choses</h2>
                <Bar/>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="nom">Nom</Label>
                        <Input 
                            type="text" 
                            name="nom" id="votre-nom" 
                            placeholder="Votre nom" 
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            type="email" 
                            name="email" id="votre-email" 
                            placeholder="Votre email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Message</Label>
                        <Input 
                            type="textarea" 
                            name="text" id="message" 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </FormGroup>
                    <Button type={"submit"}>
                        Envoyer
                    </Button>
                </Form>
            </div>
            <Adresse/>
        </ContactStyle>
    )
}

export default Contact;