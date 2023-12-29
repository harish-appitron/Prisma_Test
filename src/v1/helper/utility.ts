import {Request,response } from 'express';
import 'moment-timezone';
import moment from "moment";

import 'dotenv/config';
import nodemailer from 'nodemailer'
// const secretKey:any = config.secretKey; //process.env.SECRET;
import multer from 'multer'



export const dateWithFormat = () => {
	const date = new Date();
	date.setFullYear(date.getFullYear());
	const goodDate = moment(date).tz('Asia/Kolkata').format("YYYY-MM-DD HH:mm:ss");
	return goodDate;
};


// ====================================================================================================
// ====================================================================================================



export const getTimeAndDate =async () => {
	var m = moment.tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm');
	const str = (m).toString().split(" ");
	return [str[0], str[1]];
  }

// ====================================================================================================
// ====================================================================================================

// export const jwtGenerate = async (id: string) => {
// 	let token = jwt.sign({ userId: id }, secretKey, {
// 		expiresIn: "30d", // expires in 24 hours
// 	});
// 	return token;
// };

// ====================================================================================================
// ====================================================================================================




export const GeneratePassword = async() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
  
    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      code += characters[randomIndex];
    }
  
	console.log(code, "code");
	
    return code;
  }
    
    // console.log("GeneratePassword is 6 : ") 
    //         console.log( GeneratePassword() )	

//   // Example: Generate a 6-character referral code
//   const referralCode = generateReferralCode(8);
//   console.log(referralCode);


// ====================================================================================================
// ====================================================================================================



// export const sendMail = async(Subject:string, GeneratePassword:any, email: string) => {
// 	try {

// 		const transporter = nodemailer.createTransport(config.smtp)

// 		let info  = await transporter.sendMail({
// 			from: email,
// 			to: 'harishkhandelwal2003@gmail.com',
// 			subject: Subject,
// 			text: GeneratePassword,
// 			html: ``
// 		  })
// 	    //  result = info.messageId;
		
// 		  console.log("Message sent: %s", info.messageId)
// 		  console.log("info", nodemailer.getTestMessageUrl(info));
// 		  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// 		// res.json(info)
// 		} catch (err) {
// 		console.log("error",err);
// 		// result = false;
// 		throw err;
// 	}
// }



// ====================================================================================================
// ====================================================================================================

