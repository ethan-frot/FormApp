import {Clients, ClientStatus} from "../types/client.ts";
import connectAirtable from "./connection.ts";
import React from "react";

const getClients = (setClients: React.Dispatch<React.SetStateAction<Clients>>) => {
    const base = connectAirtable();
    const TABLE_NAME = "Clients";
    const table = base(TABLE_NAME);

    table.select().all((error, records) => {
        if (error) {
            console.error("Error fetching clients:", error);
            return;
        }

        if (!records) {
            console.error("No records fetched from Airtable.");
            return;
        }

        const clients: Clients = records.map((record) => ({
            id: record.id,
            firstName: record.get("firstName") as string,
            lastName: record.get("lastName") as string,
            email: record.get("email") as string,
            phoneNumber: record.get("phoneNumber") as string,
            notes: record.get("notes") as string,
            createdAt: new Date(record.get("createdAt") as string),
            status: record.get("status") as ClientStatus,
        }));

        setClients(clients);
    });
};

export default getClients;
