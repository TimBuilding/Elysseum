import React from 'react';
import Input from '@/components/ui/input';
import Textarea from '@/components/ui/textarea';

interface ContactFormProps {
    title: string;
    placeholder: string;
    type?: 'input' | 'textarea';
}

const ContactFormComponent: React.FC<ContactFormProps> = ({title, placeholder, type}) => {
    return (
            <div className="gap-4 flex flex-col lg:flex-row lg:my-1">
                <p className="w-1/4 text-base font-medium text-[#E6E6E6] text-left lg:text-xl">{title}</p>
                {type === 'textarea' ? (
                        <Textarea rows={4} placeholder={placeholder}/>
                ) : (
                        <Input type="text" placeholder={placeholder}/>
                )}
            </div>
    );
};

export default ContactFormComponent;


