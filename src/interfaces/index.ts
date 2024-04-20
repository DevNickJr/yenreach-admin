export interface IResponse<T> {
    data: T
    status: string
}

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

export interface IJob {
    company_name: string,
    job_title: string,
    job_type: string,
    salary: string,
    location: string,
    job_overview: string,
    job_benefit: string,
    job_link: string,
    job_tags: string,
    admin_string: string,
    expiry_date: string
    admin_job?: string
    business_string?: string
    created_at?: string
    id?: string
    job_string?: string
    status?: string
}

export interface IBlog {
    author: string
    blog_string: string
    created_at: string | null
    file_path: string
    id: string
    post: string
    snippet: string
    title: string
}


export interface IUpdateStatus {
    id: string
    data: string
}

export interface IBusiness {
    address: string
    category: string
    created: string
    cv: string
    description: string    
    email: string
    experience: string
    facebook_link: string
    facilities: string
    id: string
    instagram_link: string
    last_updated: string
    linkedin_link: string
    modifiedby: string
    name: string
    owner_email: string
    owner_name: string
    phonenumber: string
    reg_stage: string
    state: string
    state_id: string
    subscription_string: string
    user_string: string
    verify_string: string
    website: string
    whatsapp: string
    working_hours: string
    youtube_link: string
}


export interface IQuery {
    page: number
    num_per_page: number
}