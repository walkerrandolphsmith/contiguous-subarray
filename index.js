export default (sequence) => {
    const homogenouslyNegative = sequence.reduce((isNeg, next) => next >= 0 ? false : isNeg, true);
    return homogenouslyNegative
        ? getMaxNegative(sequence)
        : getMax(sequence);
}

const getMaxNegative = (sequence) => {
    const max = Math.max(...sequence);
    return { max: max, maxSequence: [max] };
};

const getMax = (sequence) => {
    let max = 0;
    let running = 0;
    let maxSeq = [];
    let runningSeq = [];

    sequence.forEach(element => {
        running += element;
        runningSeq.push(element);
        if(running < 0) {
            running = 0;
            runningSeq = [];
        }
        else if(max < running) {
            max = running;
            maxSeq = runningSeq.slice(0);
        }
    });

    return { max: max, maxSequence: maxSeq };
};