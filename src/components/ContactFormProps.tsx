import React from "react";
import type {FC} from "react";
import ContactFormComponent from "./ContactFormComponent.tsx";

export interface ContactFormProps {
    title: string
    placeholder: string
    type?: 'input' | 'textarea'
}

const ContactForm: FC<ContactFormProps> = ({ title, placeholder, type }) => {
    return (
        <ContactFormComponent title={title} placeholder={placeholder} type={type}></ContactFormComponent>
    )
}

export default ContactForm