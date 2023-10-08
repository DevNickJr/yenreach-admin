import { JwtPayload } from "jsonwebtoken"
import { NextApiRequest } from "next"
import { NextRequest } from "next/server"

export interface IUserLogin {
    email: string
    password: string
}

export interface IForgotPassword { 
    email: string 
    redirect_url: string 
}

export interface IChangePassword { 
    old_password: string
    password: string
    confirm_password: string 
}

export interface IVerifyUser { 
    _id: string
    status: 'verified' | 'unverified' | 'suspended' | 'failed' | 'pending'
}

export interface IId { 
    _id: string
}

export interface IApproveWithdrawal { 
    _id: string
    status: 'approved' | 'denied' | 'processing'
}

export interface IApproveDeposit { 
    _id: string
    status: 'approved' | 'denied' | 'processing'
}

export interface IHandleInvest { 
    _id: string
    status: 'active' | 'paused' | 'completed'
}

export type ILanguage = 'en' | 'es' | 'de'  | 'zh' | 'ko' | 'tr'
export const languageCodes: ILanguage[] = ['en', 'es', 'de', 'zh', 'ko', 'tr']


export interface IUserRegister {
    email: string
    password: string
    // confirm_password: string
    first_name: string      
    last_name: string   
    phone: string
    terms?: boolean  
    nationality: string
    currency: string   
}

export interface IUser extends IUserRegister {
    _id?: string
    balance: number
    bonus: number
    total_deposit: number
    total_withdrawal: number
    status: string
    is_admin: boolean
    total_investment?: number
    total_earnings?: number
    total_referral?: number
    document?: {
        front: string
        back: string
    },
    reset?: {
        code: string
        time: number
    },
    referral_id?: string
    symbol?: string  
}

export interface ILogin {
    user: IUser | null,
    token: string | null
}

export interface IResetPassword {
    email: string
}

export interface IConfirmResetPassword {
    email: string,
    code: string,
    new_password: string,
    confirm_password: string
}

export interface IVerifyKYC {
    front: string
    back: string
}

export interface IRegisterFace {
    email: string
    image: string
}

export interface CustomRequest extends NextRequest {
    user: IUser | JwtPayload;
}

export interface IVerifiedFace {
    level: string
    image: string
}

export interface IProfile {
    email: string
    phone: string
    first_name: string      
    last_name: string        
    middle_name: string
    level: string      
    matric_no: string 
  }


export interface IPassword {
    old_password: string
    new_password: string
    confirm_password: string
  }
  

export interface IReducerAction<T> {
    type: T;
    payload?: string | { [key: string]: string };
    data?: string | { [key: string]: string };
    name?: string;
}

export interface ILoginReducerAction extends IReducerAction<"email" | "password"> {
    payload: string
}
export interface IPasswordResetReducerAction extends IReducerAction<"new_password" | "confirm_password"> {
    payload: string
}

export interface IRegistereducerAction extends IReducerAction<"email" | "password" | "confirm_password" | "first_name" | "last_name" | "terms" | "currency" | "nationality" | "phone"> {
    payload: string
}


export interface ITableColumn {
    name: string;
    label: string;
    extra?: boolean;
    custom?: (value: string, meta: any) => JSX.Element;
    options?: {
        filter: boolean;
        sort: boolean;
    };
}

export interface IFaqs {
    question: string;
    answer: string;
}

export interface IWallet {
    _id?: string;
    name: string;
    address: string;
    qr_code: string;
}

export interface IBank {
    _id?: string;
    recipient: string;
    number: string;
    type: string;
    name: string;
    branch: string;
    reference: string;
    special: boolean;
}

export interface IPlan {
    _id?: string;
    name: string;
    minimum: number;
    maximum: number;
    duration: number;
    roi: number;
}

export interface IDeposit {
    _id?: string;
    email: string;
    userId: string;
    amount: number;
    wallet: string;
    proof: string;
    status?: string;
    createdAt?: string;
}

export interface IInvest {
    _id?: string;
    email: string;
    userId: string;
    amount: number;
    plan: string;
    status?: string;
    createdAt?: string;
    pause?: {
        status: boolean;
        start: number;
        total: number;
    }
}

export type WithdrawalType = 'BANK' | 'CRYPTO'
export type assetType = "BTC" | "ETH" | "BNB"

export interface IWithdrawal {
    _id?: string;
    email: string;
    userId: string;
    amount: number;
    type: WithdrawalType;
    bank_name?: string;
    account_name?: string;
    account_number?: string;
    // account?: string;
    asset?: assetType;
    wallet?: string;
    // proof: string;
    status?: string;
    createdAt?: string;
}
   
// export interface IPlan {
//     name: string;
//     minimum: string;
//     maximum: string;
//     roi: string;
//     duration: string;
//     status?: string;
//     description: string;
//     image: string;
// }


export interface IFeedback {
    name: string;
    email: string;
    message: string;
}