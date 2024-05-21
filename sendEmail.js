import {SESClient, SendTemplatedEmailCommand} from "@aws-sdk/client-ses";
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

const sendEmail = async (recipientEmail, name, templateName) => {
    const sendTemplatedEmailCommand = new SendTemplatedEmailCommand({
        Destination: {
            ToAddresses: [recipientEmail],

        },
        Source: process.env.AWS_VERIFIED_EMAIL_ADDRESS,
        Template: templateName,
        TemplateData: JSON.stringify({})
    });

    try {
        const res = await sesClient.send(sendTemplatedEmailCommand);
        console.log('Email has been sent!', res)
    } catch (error) {
        console.error(error)
    }

}
sendEmail('tamangelarivera@gmail.com', 'Tamara', 'Elysseum_Template')

