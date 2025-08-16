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
    token?: string
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

export interface IProduct { 
    quantity: number;
    price: number;
    safetyTip: string;
    name : string;
    businessId: string;
    description : string;
    categories : { id: string; category: string }[];
    photos : string[];
    color : string;
    type: string;
    productId: string,
    discountedPrice: number;
    dealEndDate: string;
}
export interface IAddProduct { 
    quantity: number;
    price: number;
    safetyTip: string;
    name : string;
    businessId: string;
    description : string;
    categories : string[];
    photos : string[];
    color : string;
    type: string;
    productId: string,
    discountedPrice: number;
    dealEndDate: string;
}

export interface IBlog {
    id: string
    authorId: string;
    title: string;
    preview: string;
    content: string;
    mediaUrl?: string;
    isFeatured?: boolean;
    author: IUser

    // author: string
    // blog_string: string
    // created_at: string | null
    // file_path: string
    // id: string
    // post: string
    // snippet: string
}

export interface IAddBlog {
    authorId: string;
    title: string;
    preview: string;
    content: string;
    mediaUrl?: string;
    isFeatured?: boolean;
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
    id: string
    username: string
    name: string
    official_email: string
    personal_email: string
    phoneNumber: string
    authorizationLevel: AdminAuthorizationLevel
    createdAt: string
}

export interface ISetting {
    id: string;
    name: string;
    value: string;
}

export enum SettingsValueType {
    // String = 'string',
    // Number = 'number',
    Boolean = 'boolean',
    // Enum = 'enum',
    // Options = 'options',
    // Object = 'object',
    StringArray = 'string_array',
    NumberArray = 'number_array',
    // ObjectArray = 'object_array',
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

export interface ISubPlan {
    id?: string;
    planId: string;
    name: string;
    durationInMonths: number;
    amount: number;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
}

export interface IPlan {
    id: string;
    name: string;
    videoLimit: number;
    sliderLimit: number;
    branchLimit: number;
    socialMediaLimit: number;
    order: number;
    subPlans: ISubPlan[]
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string | null;
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
    password: string;
    phoneNumber: string;
    name: string
    username: string
    personal_email: string
    official_email: string
    authorizationLevel: AdminAuthorizationLevel
}

export interface IAddSetting {
    name: string;
    value: string | boolean | number;
    valueType: string;
    options: string[];
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
    name: string;
    photoLimit: number;
    videoLimit: number;
    sliderLimit: number;
    branchLimit: number;
    socialMediaLimit: number;
    order: number;
    description?: string;
}
export interface IAddCategory {
    section: string
}

export interface IAddSubCategory {
    section_string: string
    category: string
}

export interface IBillboard {
    id: string;
    userId: string | null;
    user?: IUser;
    adminId: string;
    businessId: string;
    title: string;
    description: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
    startDate: string;
    endDate: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string | null;
}

export interface IQuery {
    id: string
    page: number
    token: string
    search: number
    num_per_page: number
}

export interface IMutateQuery {
    id: string
    token: string
}

export enum AdminAuthorizationLevel {
    STAFF = 'staff',
    MANAGER = 'manager',
    OWNER = 'owner',
  }
  