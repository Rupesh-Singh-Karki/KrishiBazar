import {resend} from "@/lib/resend"
import verficationEmail from "../../emails/varificationEmail"

import { ApiResponse } from "@/types/ApiResponse"
import { promise } from "zod"

export async function sendVarificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'mstrymessage: Verify your email',
            react: verficationEmail({username, otp: verifyCode}),
          });
        return {success: true, message: "Verification email send"}
    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {success: false, message: "Error sending verification email"}
    }
}