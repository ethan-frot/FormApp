export enum ClientStatus {
    NOT_CONTACTED = "Not contacted",
    CONTACT_IN_FUTURE = "Contact in future",
    CONTACTED = "Contacted",
}

export type Client = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    notes: string;
    createdAt: Date;
    status: ClientStatus;
};

export type Clients = Client[];

export type ClientDto = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    notes: string;
    createdAt: Date;
    status: ClientStatus;
};
