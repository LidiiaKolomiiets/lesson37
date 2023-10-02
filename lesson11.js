function pow(number, degree) {
    if (typeof number !== 'number') {
        throw new Error('Invalid number');
    }
    if (typeof degree !== 'number' || !Number.isInteger(degree)) { 
        throw new Error('Invalid degree'); 
    }

    if (degree === 0) {
        return 1;
    }

    if (degree < 0) {
        return 1 / (number * pow(number, -degree - 1));
    }

    return number * pow(number, degree - 1);
}

export default pow;
