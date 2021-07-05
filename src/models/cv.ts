
export interface Area
{
    id: string | null | undefined;
    name: string | null | undefined;
    url: string | null | undefined;
}

export interface Certificate {
    achieved_at: string | null | undefined;
    owner?: any | null | undefined;
    title: string | null | undefined;
    type: string | null | undefined;
    url: string | null | undefined;
}

export interface Primary {
    name: string | null | undefined;
    name_id: string | null | undefined;
    organization: string | null | undefined;
    organization_id?: any | null | undefined;
    result: string | null | undefined;
    result_id?: any | null | undefined;
    year: number | null | undefined;
}

export interface Education {
    primary: Primary[] | null | undefined;
}

export interface TotalExperience {
    months: number | null | undefined;
}

export interface Industry {
    id: string | null | undefined;
    name: string | null | undefined;
}

export interface Area2 {
    id: string | null | undefined;
    name: string | null | undefined;
    url: string | null | undefined;
}

export interface LogoUrls {
    90: string | null | undefined;
}

export interface Employer {
    alternate_url: string | null | undefined;
    id: string | null | undefined;
    logo_urls: LogoUrls | null | undefined;
    name: string | null | undefined;
    url: string | null | undefined;
}

export interface Experience {
    position: string | null | undefined;
    start: string | number | null | undefined;
    end: string | number | null | undefined;
    company: string | null | undefined;
    industries: Industry[] | null | undefined;
    company_url: string | null | undefined;
    area: Area2 | null | undefined;
    company_id: string | null | undefined;
    employer: Employer | null | undefined;
}

export interface Gender {
    id: string | null | undefined;
    name: string | null | undefined;
}

export interface Salary {
    amount: number | null | undefined;
    currency: string | null | undefined;
    positionWant: string | null | undefined;
}

export interface Photo {
    medium: string | null | undefined;
    small: string | null | undefined;
    id: string | null | undefined;
}

export interface Counters {
    total: number | null | undefined;
}

export interface Comments {
    url: string | null | undefined;
    counters: Counters | null | undefined;
}

export interface Owner {
    comments: Comments | null | undefined;
}

export interface NegotiationsHistory {
    url: string | null | undefined;
}

export interface EmployerState {
    id: string | null | undefined;
    name: string | null | undefined;
}

export interface LastNegotiation {
    employer_state: EmployerState | null | undefined;
    created_at: Date | string | null | undefined;
}

export interface Item {
    id: string | null | undefined;
    title: string | null | undefined;
    url: string | null | undefined;
    first_name: string | null | undefined;
    last_name: string | null | undefined;
    middle_name: string | null | undefined;
    can_view_full_info: boolean | null | undefined;
    age: number | null | undefined;
    birthday: string | null | undefined;
    alternate_url: string | null | undefined;
    created_at: Date | string | null | undefined;
    updated_at: Date | string | null | undefined;
    area: Area | null | undefined;
    certificate: Certificate[] | null | undefined;
    education: Education | null | undefined;
    total_experience: TotalExperience | null | undefined;
    experience: Array<object> | null | undefined;
    gender: Gender | null | undefined;
    salary: Salary | null | undefined;
    photo: Photo | null | undefined;
    owner: Owner | null | undefined;
    negotiations_history: NegotiationsHistory | null | undefined;
    last_negotiation: LastNegotiation | null | undefined;
}

export interface ICV {
    found: number;
    per_page: number;
    page: number;
    pages: number;
    items: Item[];
}
/**    id: number
 name: string
 lastName: string
 mobile: string
 city: string
 bDay: string
 gender: "man" | "women"
 citizenship: string
 experience: boolean
 positionWant: string
 zp: number
 profObl: Array<string>
 // /!**
 workPlace: Array<object> | null

 // workPlace: Array<object> {
   // organization: string | null | undefined
   // workPeriod: string | null | undefined
   // position: string | null | undefined
   // jobFunction: string | null | undefined }
 // *!/
 about: string
 keySkills: Array<string>

 obrazovanie: Array<object>*/








