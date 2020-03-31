import { v4 as uuid } from 'uuid';

export const actions = ['CREATE', 'DELETE'];

export default class ListAction {
    constructor(action, id, timestamp = Date.now(), text) {
        if(actions.includes(action)) {
            this.action = action;
        } else {
            throw new Error('Aktion nicht vorhanden.');
        }

        if(action === actions[1] && !id) {
            throw new Error('Zum Löschen, die ID des zu löschenden Eintrages angeben.');
        } else {
            this.id = id;
        }

        if(action === actions[0]) {
            this.id = uuid();
        }

        this.text = text;
        this.timestamp = timestamp;
    }
};