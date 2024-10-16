export enum ClientAccountType {
    PERSONAL = "Personal",
    BUSINESS = "Business",
}

export type Client = {
    name: string;
    accountType: ClientAccountType;
    email: string;
    password: string;
    age: string;
    areaOfInterest: string;
    description: string;
};

export type Clients = Client[];

export type ClientDto = {
    name: string;
    accountType: ClientAccountType;
    email: string;
    password: string;
    age: string;
    areaOfInterest: string;
    description: string;
};
