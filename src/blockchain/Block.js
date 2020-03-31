export default class Block {
    nonce = 0;
    hash = null;
    miningDuration = null;

    constructor(data, timestamp = Date.now(), previousHash = "", position) {
        this.body = data;
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.position = position;
    }

    /**
     * 
     * @param {Object} data 
     */
    static async sha256(data) {
        const encoder = new TextEncoder();
        const decoder = new TextDecoder()
        const dataBuffer = encoder.encode(String(data));

        const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);

        // HashBuffer to Hex String
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

        return hashHex;
    }

    async calculateHash() {
        return await Block.sha256(JSON.stringify(this.body) +
            String(this.timestamp) +
            String(this.previousHash) +
            String(this.nonce)
        );
    }

    async mine(difficulty) {
        this.nonce = 0;
        console.log('Mining...');
        const start = performance.now();
        while (!String(this.hash).startsWith('0'.repeat(difficulty))) {
            this.nonce++;
            this.hash = await this.calculateHash();
        }
        const end = performance.now();
        console.log(end-start);
        this.miningDuration = end - start;
    }
};