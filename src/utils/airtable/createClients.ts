import { Client, ClientDto, Clients } from "../types/client.ts";
import connectAirtable from "./connection.ts";
import React from "react";

const createClient = (
  clientDto: ClientDto,
  setClients: React.Dispatch<React.SetStateAction<Clients>>
) => {
  const base = connectAirtable();
  const TABLE_NAME = "Testers";
  const table = base(TABLE_NAME);

  const newClient = {
    fields: { ...clientDto },
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
          } as Client,
        ];
      });
    }
  });
};

export default createClient;
