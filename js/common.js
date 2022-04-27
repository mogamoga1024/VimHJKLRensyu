
const Common = {
    randomInt(max) {
        return crypto.getRandomValues(new Uint32Array(1))[0] % max;
    }
};
