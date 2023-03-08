const Generation = require('./index');
const GenerationTable = require('./table');

class GenerationEngine {
    constructor() {

        this.generation = null;
        this.timer = null;
    }

    start() {
        this.newGeneration();
    }

    stop() {
        clearTimeout(this.timer);
    }

    newGeneration() {
        const generation = new Generation();

        GenerationTable.storeGeneration(generation)
            .then(({generationId}) => {
                this.generation = generation;
                this.generation.generationId = generationId;
                console.log('new generation', this.generation);

                this.timer = setTimeout(() => this.newGeneration(), this.generation.expiration.getTime() - Date.now());
            })
            .catch(error => console.error(error));

    }
}

module.exports = GenerationEngine;
