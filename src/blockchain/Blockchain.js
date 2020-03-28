import Block from './Block';

export default class Blockchain {
    chain = [];

    constructor(difficulty) {
        if(typeof difficulty !== 'number') {
            throw new TypeError('Difficulty muss vom Typ "Number" sein.');
            this.difficulty = null;
        } else if(difficulty < 1) {
            throw new Error('Difficulty muss mindestens 1 sein.');
            this.difficulty = null;
        } else {
            this.difficulty = difficulty;
        }

        this.createGenesisBlock();
    }

    get length() {
        return this.chain.length;
    }

    get latestBlock() {
        return this.chain[this.chain.length-1];
    }

    createGenesisBlock() {
        if(this.chain.length > 0) {
            console.log('Kann Genesis Block nicht generieren, da die Kette bereits Blöcke enthält.');
        } else {
            const genesisBlock = new Block({ desc: 'Genesis Block' }, Date.now(), '', 0);
            genesisBlock.mine(this.difficulty);
            this.chain[0] = genesisBlock;
        }
    }

    async mineBlock(data) {
        const newBlock = new Block(data, Date.now(), this.latestBlock.hash, this.length);
        await newBlock.mine(this.difficulty);
        this.chain.push(newBlock);
    }

    async validateChain() {
        let valid = true
        for(let i=1; i<this.length; i++) {
            console.log(this.chain[i])
            const hash = await this.chain[i].calculateHash();
            const previousHash = await this.chain[i-1].calculateHash();

            if(!(hash.startsWith('0'.repeat(this.difficulty)) &&
                previousHash.startsWith('0'.repeat(this.difficulty)))
            ) {
                valid = false;
                break;
            }

            if(this.chain[i].previousHash !== previousHash) {
                valid = false;
                break;
            }
        }
        return valid;
    }
};