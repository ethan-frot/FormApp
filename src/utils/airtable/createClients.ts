import { Client, ClientDto, Clients } from "../types/client.ts";
import connectAirtable from "./connection.ts";
import React from "react";

const createClient = (
  clientDto: ClientDto,
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  const base = connectAirtable();
  const TABLE_NAME = "Clients";
  const table = base(TABLE_NAME);

  const formatDateToISO = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const newClient = {
    fields: {
      ...clientDto,
      createdAt: formatDateToISO(new Date()),
    },
  };

  table.create([newClient], (error, records) => {
    if (error) console.error(error);
    if (!records) return;
    for (const record of records) {
      setClients((previousClients) => {
        return [
          ...previousClients,
          {
            ...record.fields,
            createdAt: new Date(record.fields.createdAt as string),
          } as Client,
        ];
      });
    }
  });
};

export default createClient;
