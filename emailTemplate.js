import {SESClient, CreateTemplateCommand, SendEmailCommand} from "@aws-sdk/client-ses";
import dotenv from 'dotenv';

dotenv.config();


const SES_CONFIG = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY

    },
    region: process.env.AWS_REGION,
}

const sesClient = new SESClient(SES_CONFIG);

const run = async (template_name) => {
    const createTemplateCommand = new CreateTemplateCommand({
        Template: {
            TemplateName: template_name,
            HtmlPart: `
                <p>Thank you for being so interested in Elysseum. We look forward to assisting you with your IT\n 
                    needs. Please feel free to contact us using the contact information provided below.\n</p> 
                <p>General Inquiries:</p> 
                <p>For general inquiries or more information about our services, don\'t hesitate to get in touch with\n'
                    
                    our team at:</p> 
                <ul style="list-style-type: disc;"> 
                    <li>Email: info@elysseumgroup.com</li> 
                    <li>Phone: [+1-XXX-XXX-XXXX]</li> 
                </ul> 
                <p>Sales and Business Development:</p> 
                <p>To discuss potential partnerships or business opportunities or to request a consultation, don't\n 
                    hesitate to get in touch with our sales team at:\n </p> 
                <ul style="list-style-type: disc;"> 
                    <li>Email: sales@elysseumgroup.com </li> 
                    <li>Phone: [+1-XXX-XXX-XXXX]</li>
                </ul> 
                <p>Technical Support:</p> 
                <p> Our dedicated support team will assist if you require technical assistance or have a supportrelated
                    inquiry. Please reach out to us at:</p> 

                <ul style="list-style-type: disc;"> 
                    <li>Email:Email: support@elysseumgroup.com</li>
                    <li>Phone: [+1-XXX-XXX-XXXX]</li>
                </ul>
                 
                <p>Office Hours:\n</p> 
                <p>Office hours are 9:00 AM to 6:00 PM [CST]. We are available Monday through Friday,\n 
                    excluding major holidays</p> 
                <p>You can also connect with us through our social media channels: // create a social media\n 
                    account with email or phone, including mfa </p> 
                <ul style="list-style-type: disc;"> 
                    <li>LinkedIn: [LinkedIn Profile URL]</li>
                    <li>Twitter: [Twitter Profile URL]</li>
                    <li>Facebook: [Facebook Profile URL]</li>
                </ul> 
                <p> We highly value your feedback and are committed to providing you the best possible service. If
                    you have any suggestions, comments, or concerns, please don't hesitate to let us know. Your
                    input is essential to us, and we will take it into account to continuously improve our
                    services. </p> 
                <p>Thank you for choosing Elysseum. We eagerly look forward to hearing from you and supporting
                    you with your IT requirements.</p> 
                `,
            TextPart: `Thank you for being so interested in Elysseum. We look forward to assisting you with your IT\n, 
                needs. Please feel free to contact us using the contact information provided below.\n,
                General Inquiries:\n
                For general inquiries or more information about our services, don't hesitate to get in touch with\n +
                our team at:\n 
                 Email: info@elysseumgroup.com\n 
                 Phone: [+1-XXX-XXX-XXXX]\n 
                Sales and Business Development:\n 
                To discuss potential partnerships or business opportunities or to request a consultation, don't\n 
                hesitate to get in touch with our sales team at:\n 
                 Email: sales@elysseumgroup.com\n 
                 Phone: [+1-XXX-XXX-XXXX]\n 
                Technical Support:\n 
                Our dedicated support team will assist if you require technical assistance or have a supportrelated inquiry. Please reach out to us at:\n 
                 Email: support @elysseumgroup.com\n 
                 Phone: [+1-XXX-XXX-XXXX]\n 
                Office Hours:\n 
                Office hours are 9:00 AM to 6:00 PM [CST]. We are available Monday through Friday,\n 
                excluding major holidays.\n 
                Get in Touch:\n 
                You can also connect with us through our social media channels: // create a social media\n 
                account with email or phone, including mfa\n 
                 LinkedIn: [LinkedIn Profile URL] - TBD\n 
                 Twitter: [Twitter Profile URL] - TBD\n 
                 Facebook: [Facebook Profile URL] - TBD\n 
                We highly value your feedback and are committed to providing you the best possible service. If\n 
                you have any suggestions, comments, or concerns, please don't hesitate to let us know. Your\n 
                input is essential to us, and we will take it into account to continuously improve our services.\n 
                Thank you for choosing Elysseum. We eagerly look forward to hearing from you and supporting\n 
                you with your IT requirements.`,
            SubjectPart: 'Elysseum IT Services',
        }
    });

    try {
        const res = await sesClient.send(createTemplateCommand);
        console.log('SES Template created!', res)
    } catch (error) {
        console.error('Failed to create template', error)
    }
}

run('Elysseum_Template')