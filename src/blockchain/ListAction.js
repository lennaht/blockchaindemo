export default class ListAction {
    constructor(action, id, timestamp = Date.now(), text) {
        const actions = ['CREATE', 'DELETE'];
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

        this.text = text;
        this.timestamp = timestamp;
    }
};