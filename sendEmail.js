import {SESClient, SendEmailCommand} from "@aws-sdk/client-ses";
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

const sendEmail = async (recipientEmail, name) => {
    const params = {
        Destination: {
            ToAddresses: [recipientEmail],
        },
        ReplyToAddresses: [],
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: '<h1>Hello.</h1> <p> Thank you for your continued trust and partnership with Elysseum. We are dedicated to delivering the highest quality of service and ensuring your IT systems are always at their best.</p> <p> Best regards,</p> <p>Elysseum IT services</p>'
                },
                Text: {
                    Charset: "UTF-8",
                    Data: "Hello, Thank you for your continued trust and partnership with Elysseum. We are dedicated to delivering the highest quality of service and ensuring your IT systems are always at their best. Best regards, Elysseum IT services"

                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: `Hello, ${name}!`
            }
        },
        Source: process.env.AWS_VERIFIED_EMAIL_ADDRESS
    };

    try {
        const sendEmailCommand = new SendEmailCommand(params);
        const res = await sesClient.send(sendEmailCommand);
        console.log('Email has been sent!', res)
    } catch (error) {
        console.error(error)
    }

}
sendEmail('tamangelarivera@gmail.com', 'Tamara')

