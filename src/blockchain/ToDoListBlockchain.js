import Blockchain from './Blockchain';
import ListAction from './ListAction';

export default class ToDoListBlockchain extends Blockchain {
    pendingActions = [];

    constructor(difficulty) {
        super(difficulty);
    }

    addPendingAction(action, id, timestamp = Date.now(), text) {
        try {
            const newAction = new ListAction(action, id, timestamp, text);
            this.pendingActions.push(newAction);
        } catch (error) {
            console.log(error);
        }
    }
    async minePendingActions() {
        await this.mineBlock(this.pendingActions);
        this.pendingActions = [];
    }
};