export default (sequence) => {
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

    return {
        max: max,
        maxSequence: maxSeq
    };
};