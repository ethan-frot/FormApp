import React, { useEffect, useState } from "react";
import { Clients } from "../utils/types/client.ts";
import getClients from "../utils/airtable/getClients.ts";

const AdminSinglePage: React.FC = () => {
    const [clients, setClients] = useState<Clients>([]);

    useEffect(() => {
        getClients(setClients);
    }, []);

    return (
        <div className="flex justify-center items-center pt-10">
            <div className="w-full max-w-7xl">
                <h1 className="text-2xl font-semibold mb-4">Clients List</h1>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">First Name</th>
                        <th className="py-2 px-4 border-b text-left">Last Name</th>
                        <th className="py-2 px-4 border-b text-left">Email</th>
                        <th className="py-2 px-4 border-b text-left">Phone</th>
                        <th className="py-2 px-4 border-b text-left">Status</th>
                        <th className="py-2 px-4 border-b text-left">Created At</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <td className="py-2 px-4 border-b">{client.firstName}</td>
                            <td className="py-2 px-4 border-b">{client.lastName}</td>
                            <td className="py-2 px-4 border-b">{client.email}</td>
                            <td className="py-2 px-4 border-b">{client.phoneNumber}</td>
                            <td className="py-2 px-4 border-b">{client.status}</td>
                            <td className="py-2 px-4 border-b">{client.createdAt.toLocaleDateString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminSinglePage;
