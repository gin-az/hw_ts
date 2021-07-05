

    export interface Gender {
        id: string;
        name: string;
    }

    export interface Area {
        url: string;
        id: string;
        name: string;
    }

    export interface Metro {
        lat: number;
        lng: number;
        order: number;
        id: string;
        name: string;
    }

    export interface BusinessTripReadiness {
        id: string;
        name: string;
    }

    export interface Type {
        id: string;
        name: string;
    }

    export interface ValueClassValue {
        country?: string;
        city?: string;
        number?: string;
        formatted?: string;
    }

    export interface Value {
        valueClassValue?: ValueClassValue | null;
        stringValue?: string | null;
    }

    export interface Contact {
        verified?: boolean | null;
        comment?: string | null;
        type: Type;
        preferred: boolean;
        value: Value;
    }

    export interface Type2 {
        name: string;
        id?: string | null;
    }

    export interface Site {
        url: string;
        type: Type2;
    }

    export interface Photo {
        small: string;
        medium: string;
        id: string;
        description?: any | null;
    }

    export interface Portfolio {
        small: string;
        medium: string;
        id: string;
        description: string;
    }

    export interface Specialization {
        id: string;
        name: string;
        profareaID: string;
        profareaName: string;
        laboring: boolean;
    }

    export interface Salary {
        amount: number;
        currency: string;
    }

    export interface Employment {
        id: string;
        name: string;
    }

    export interface Schedule {
        id: string;
        name: string;
    }

    export interface Level {
        id: string;
        name: string;
    }

    export interface Language {
        id: string;
        name: string;
        level: Level;
    }

    export interface Area2 {
        url: string;
        id: string;
        name: string;
    }

    export interface Industry {
        id: string;
        name: string;
    }

    export interface Experience {
        company: string;
        companyID: string;
        area: Area2;
        companyURL: string;
        industries: Industry[];
        position: string;
        start: string;
        end: string;
        description: string;
    }

    export interface TotalExperience {
        months: number;
    }

    export interface Citizenship {
        url: string;
        id: string;
        name: string;
    }

    export interface WorkTicket {
        url: string;
        id: string;
        name: string;
    }

    export interface TravelTime {
        id: string;
        name: string;
    }

    export interface Recommendation {
        name: string;
        position: string;
        organization: string;
    }

    export interface ResumeLocale {
        id: string;
        name: string;
    }

    export interface Certificate {
        title: string;
        achievedAt: string;
        type: string;
        owner?: string | null | undefined;
        url: string;
    }

    export interface Pdf {
        url: string;
    }

    export interface Rtf {
        url: string;
    }

    export interface Download {
        pdf: Pdf;
        rtf: Rtf;
    }

    export interface Pdf2 {
        url: string;
    }

    export interface Rtf2 {
        url: string;
    }

    export interface Download2 {
        pdf: Pdf2;
        rtf: Rtf2;
    }

    export interface Actions {
        download: Download2;
    }

    export interface DriverLicenseType {
        id: string;
    }

    export interface HiddenField {
        id: string;
        name: string;
    }

    export interface Rezume {
        id: string;
        lastName: string;
        firstName: string;
        middleName: string;
        age: number;
        birthDate: string;
        gender: Gender;
        area: Area;
        metro: Metro;
        relocation?: any;
        businessTripReadiness: BusinessTripReadiness;
        contact: Array<object> | null | undefined;
        site: Array<object> | null | undefined;
        title: string;
        photo: Photo;
        portfolio: Portfolio[];
        specialization: Array<object> | null | undefined;
        salary: Salary;
        employments: Array<object> | null | undefined;
        schedules: Array<object> | null | undefined;
        education?: any | null;
        language: Language[] | null | undefined;
        experience: Experience[] | null | undefined;
        totalExperience: TotalExperience;
        skills: string;
        skillSet: string[];
        citizenship: Citizenship[];
        workTicket: WorkTicket[];
        travelTime: TravelTime;
        recommendation: Recommendation[];
        resumeLocale: ResumeLocale;
        certificate: Array<object> | null | undefined;
        alternateURL: string;
        createdAt: string;
        updatedAt: string;
        download: Download;
        actions: Actions;
        hasVehicle: boolean;
        driverLicenseTypes: Array<object> | null | undefined;
        hiddenFields: HiddenField[];
        marked: boolean;
    }



