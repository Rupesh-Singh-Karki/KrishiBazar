import UserModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import { sendVarificationEmail } from "@/helpers/sendVerificationEmail";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    await dbConnect();

    try {
        const {username, email, password} = await request.json();

        const exestingUserVerificationByUsername = await UserModel.findOne({
            username,
            isVerified: true
        });

        if (exestingUserVerificationByUsername) {
            return Response.json({
                success: false,
                message: 'Username already exists',
            },{status: 400 }
            );
        }

        const exestingUserByEmail = await UserModel.findOne({email});
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
        
        if (exestingUserByEmail) {
            if (exestingUserByEmail.isVerified) {
                return Response.json({
                    success: false,
                    message: 'Username already exists with this email',
                },{status: 400 }
                );
            }
            else{
                const hashedPassword = await bcrypt.hash(password, 10);
                exestingUserByEmail.password = hashedPassword;
                exestingUserByEmail.verifyCode = verifyCode;
                exestingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000);
                await exestingUserByEmail.save();
            }
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);    
            const expiryDate = new Date()
            expiryDate.setDate(expiryDate.getDate() + 1)

            const newUser = new UserModel({
                username,
                email,
                password: hashedPassword,
                verifyCode: verifyCode,
                verifyCodeExpiry: expiryDate,
                isVerified: false,
                isAcceptingMessage: true,
                messages: []
            });
            await newUser.save();
        }

        const emailResponse = await sendVarificationEmail(
            email, 
            username, 
            verifyCode
        );
        if (!emailResponse.success) {
            return Response.json({
                success: false,
                message: emailResponse.message,
            },{status: 500}
            );
        }

        return Response.json({
            success: true,
            message: 'User registered successfully please verify your email',
        },{status: 201}
        );
    } catch (error) {
        console.error('Error registering user:', error);
        return Response.json(
        {
            success: false,
            message: 'Error registering user',
        },
        { 
            status: 500 
        }
        );
    }
}
