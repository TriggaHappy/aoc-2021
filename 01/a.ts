const input = await Bun.file("./input.txt").text();

let count = 0;
const lines = input.split('\n');

lines.map((line, index) => {
    if (Number(line) >= Number(lines[index - 1])){
        count++
    }
})
console.log(count)