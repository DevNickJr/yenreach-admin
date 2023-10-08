export interface IUserLogin {
    username: string
    password: string
}

export interface ILogin {
    user: IUser | null,
    token: string | null
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


