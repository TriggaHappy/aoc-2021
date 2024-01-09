const input = await Bun.file("./input.txt").text();

let count = 0;
const lines = input.split('\n');

lines.map((line, index) => {
    const lastThreeNumbers = Number(lines [index + 1]) + Number(lines [index]) + Number(lines [index - 1]);
    const nextThreeNumbers = Number(lines [index]) + Number(lines [index + 1]) + Number(lines [index + 2]);

    if (nextThreeNumbers > lastThreeNumbers){
        count++

    }
})
console.log(count)
