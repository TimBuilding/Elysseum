import type {FC} from "react";
import ContactForm from "../components/ContactForm.astro";

export interface ContactFormProps {
    title: string
};

const ContactForm: FC<ContactFormProps> = ({ title }) => {
    return (
        <ContactForm title={title}></ContactForm>
    )
}

export default ContactForm