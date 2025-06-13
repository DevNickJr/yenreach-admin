export interface IResponse<T> {
    data: T
    status: string
    total?: number
}

export interface IPaginatedResponse<T> {
    data: T
    page: number
    limit: number
    total: number
    totalPages: number
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
    id: string;
    verifyString: string;
    name: string;
    email: string;
    profileImage: string | null;
    referral: string | null;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
    emailVerified: boolean;
    cv: string | null;
    dob: string | null;
    phoneNumber: string | null;
    gender: string | null;
    timer: number
}

export interface IAuth {
    token: string
}

export interface IDelete {
    token: string
    id: string
}

export interface IPaginatedQuery {
    token: string
    page: number
    num_per_page: number
}
export interface IBulkSMS {
    content: string
}

export interface IJob {
    id?: string;
    companyName: string;
    businessId: string;
    title: string;
    type: string;
    location: string;
    salary: string;
    description: string;
    benefit: string;
    applicationMethod: string;
    overview: string,
    applicationExpiry: string;
    tags: string[]
    status?: string;
    createdAt?: string;
}

export interface IBlog {
    title: string
    author: string
    blog_string: string
    created_at: string | null
    file_path: string
    id: string
    post: string
    snippet: string
}

export interface IAddBlog {
    title: string
    author: string
    post: string
    snippet: string
    admin_string: string
    file_path: string
    blog_string?: string
}


export interface IUpdateStatus {
    id: string
    data: string
}

export interface IDisapproveBusiness {
    id: string
    remarks: string
}

export interface IAdmin {
    activation: string
    autho_level: string
    created: string
    id: string
    last_updated: string
    name: string
    official_email: string
    personal_email: string
    phone: string
    username: string
    verify_string: string
}

export interface IAdvert {
    amount: string
    created: string
    duration: string
    duration_type: string
    errors: unknown[]
    id: string
    last_updated: string
    title: string
    verify_string: string
}

export interface IPlan {
    created?: string
    description: string
    duration: number
    duration_type: number
    errors?: string[]
    id?: string
    last_updated?: string
    plan: string
    price: number
    subscription_string: string
    verify_string?: string
}

export interface ISubscription {
    branches: string
    created: string
    description: string
    id: string
    last_updated: string
    package: string
    photos: string
    plans: IPlan[]
    position: string
    slider: string
    socialmedia: string
    verify_string: string
    videos: string
}

export interface ICategory {
    created: string
    details: string
    id: string
    last_updated: string
    section: string
    section_string: string
    verify_string: string
    category: string
}

export interface ISubCategory {
    category: string
    created: string
    details: string
    id: string
    last_updated: string
    section: string
    section_string: string
    verify_string: string
}

export interface IAddAdmin {
    name: string
    username: string
    personal_email: string
    official_email: string
    phone: string
    autho_level: number
}

export interface IActivateAdmin {
    verify_string: string
    password: string
}

export enum BusinessRegistrationState {
    INCOMPLETE = 'incomplete',
    PENDING = 'pending',
    APPROVED = 'approved',
    DECLINED = 'declined',
}

export interface IBusiness {
    id: string;
    verifyString: string;
    name: string;
    description: string;
    userString: string;
    userId: string;
    subscriptionString: string;
    address: string;
    town: string;
    lgaId: string;
    stateId: string;
    phoneNumber: string;
    whatsapp: string;
    email: string;
    website: string;
    facebookLink: string;
    twitterLink: string;
    instagramLink: string;
    youtubeLink: string;
    linkedinLink: string;
    cv: string;
    experience: string;
    monthStarted: string;
    yearStarted: string;
    profileImg: string;
    coverImg: string;
    registrationStatus: BusinessRegistrationState;
    isActive: boolean;
    createdAt: string;
    categories: ICategory[];
    updatedAt: string;
    deletedAt: string | null
    user: IUser;
}

export interface IAddAdvert {
    title: string
    duration_type: string
    duration: string
    amount: string
}

export interface IAddSubscription {
    package: string
    description: string
    position: number
    photos: number
    videos: number
    slider: number
    socialmedia:number
    branches: number
}
export interface IAddCategory {
    section: string
}

export interface IAddSubCategory {
    section_string: string
    category: string
}

export interface IBillboard {
    verify_string: string
    advert_type: IAdvert
    agent_string: string
    agent_type: string
    call_to_action_link: string
    call_to_action_type: string
    code: string
    created: string
    end_date: string
    errors: string[]
    filename: string
    id: string
    last_updated: string
    proposed_start_date: string
    remarks: string
    stage: string
    start_date: string
    text: string
    title: string
    user: IUser
}

export interface IQuery {
    page: number
    token: string
    search: number
    num_per_page: number
}

export interface IMutateQuery {
    id: string
    token: string
}