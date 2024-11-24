import {useEffect, useState} from "react";
import {Clients, Client, ClientStatus} from "../utils/types/client.ts";
import getClients from "../utils/airtable/getClients.ts";
import {handleDelete} from "../utils/airtable/clientActions.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import EditClientForm from "../components/ui/EditClientForm";

const AdminSinglePage = () => {
    const [clients, setClients] = useState<Clients>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedClient, setSelectedClient] = useState<Client | null>(null)

    useEffect(() => {
        getClients(setClients);
    }, []);

    const handleDeleteClient = (id: string) => {
        const updatedClients = clients.filter(client => client.id !== id);
        setClients(updatedClients);

        handleDelete(id);
    };

    const handleEditClick = (client: Client) => {
        setSelectedClient(client);
        setIsEditing(true);
    };

    const handleCloseEditForm = () => {
        setIsEditing(false);
        setSelectedClient(null);
    };

    const updateClient = (id: string, updatedNotes: string, updatedStatus: ClientStatus) => {
        setClients(prevClients =>
            prevClients.map(client =>
                client.id === id
                    ? {...client, notes: updatedNotes, status: updatedStatus}
                    : client
            )
        );
    };

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
                        <th className="py-2 px-4 border-b text-left">Notes</th>
                        <th className="py-2 px-4 border-b text-left">Created At</th>
                        <th className="py-2 px-4 border-b text-left">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id}>
                            <td className="py-2 px-4 border-b">{client.firstName}</td>
                            <td className="py-2 px-4 border-b">{client.lastName}</td>
                            <td className="py-2 px-4 border-b">{client.email}</td>
                            <td className="py-2 px-4 border-b">{client.phoneNumber}</td>
                            <td className="py-2 px-4 border-b">{client.status}</td>
                            <td className="py-2 px-4 border-b truncate max-w-xs">{client.notes}</td>
                            <td className="py-2 px-4 border-b">{client.createdAt.toLocaleDateString()}</td>
                            <td className="py-2 px-4 border-b flex items-center space-x-2">
                                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                                        onClick={() => handleEditClick(client)}>
                                    <FontAwesomeIcon icon={faEdit}/>
                                </button>
                                <button className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
                                        onClick={() => handleDeleteClient(client.id)}>
                                    <FontAwesomeIcon icon={faTrashAlt}/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {isEditing && selectedClient && (
                <EditClientForm
                    client={selectedClient}
                    onClose={handleCloseEditForm}
                    onUpdateClient={updateClient}
                />
            )}
        </div>
    );
};

export default AdminSinglePage;
