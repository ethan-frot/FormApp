import { ClientStatus } from '../types/client.ts';
import connectAirtable from './connection';

export const handleEdit = (
    id: string,
    updatedNotes: string,
    updatedStatus: ClientStatus
) => {
    const base = connectAirtable();
    const table = base('Clients');

    table.update(id, {
        "notes": updatedNotes,
        "status": updatedStatus
    }, (err, updatedRecord) => {
        if (err) {
            console.error("Erreur lors de la mise à jour du client :", err);
        } else {
            console.log("Client mis à jour :", updatedRecord);
        }
    });
};

export const handleDelete = (id: string) => {
    const base = connectAirtable();
    const table = base('Clients');

    table.destroy(id, (err) => {
        if (err) {
            console.error("Erreur lors de la suppression du client :", err);
        } else {
            console.log(`Client ${id} supprimé`);
        }
    });
};
