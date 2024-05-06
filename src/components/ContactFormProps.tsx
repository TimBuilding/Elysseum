import type {FC} from "react";
import ContactForm from "../components/ContactForm.astro";

export interface ContactFormProps {
    title: string
    placeholder: string
    type?: 'input' | 'textarea'
};

const ContactForm: FC<ContactFormProps> = ({ title, placeholder, type }) => {
    return (
        <ContactForm title={title} placeholder={placeholder} type={type}></ContactForm>
    )
}

export default ContactForm