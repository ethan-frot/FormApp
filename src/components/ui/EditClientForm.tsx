// components/ui/EditClientForm.tsx
import React, { useState, useEffect } from "react";
import { Client, ClientStatus } from "../../utils/types/client";
import { handleEdit } from "../../utils/airtable/clientActions";

interface EditClientFormProps {
    client: Client;
    onClose: () => void;
}

const EditClientForm: React.FC<EditClientFormProps> = ({ client, onClose }) => {
    const [notes, setNotes] = useState(client.notes);
    const [status, setStatus] = useState(client.status);

    useEffect(() => {
        setNotes(client.notes);
        setStatus(client.status);
    }, [client]);

    const handleSave = () => {
        handleEdit(client.id, notes, status);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-1/3">
                <h2 className="text-xl font-semibold mb-4">Edit Client</h2>
                <div className="mb-4">
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea
                        id="notes"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        id="status"
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as ClientStatus)}
                    >
                        {Object.values(ClientStatus).map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end space-x-2">
                    <button className="bg-gray-300 p-2 rounded hover:bg-gray-500 text-white" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="bg-blue-500 p-2 rounded hover:bg-blue-700 text-white" onClick={handleSave}>
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditClientForm;
