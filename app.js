const faker = require('faker');
// const cmd = require('commander');

// cmd
//     .option('-c --count <number>', 'number of instances to create');

// cmd.parse(process.argv);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ''
  });

let number;

const main = () => {
    readline.prompt();
    readline.on('line', line => {
        let input = parseInt(line.trim())
        if (!isNaN(input)){
            number = input;
            createFakes(number);
            readline.close();
        } else {
            process.exit();
        }
    })

}

main()

const createFakes = (number) => {
    for (let i = 0; i < number; i++){
        const singleFake = {};
    
        singleFake.firstName = faker.name.firstName();
        singleFake.lastName = faker.name.lastName();
        singleFake.job = faker.name.jobTitle();
        singleFake.salary = faker.finance.amount(10000,11111, 1, '$')
        
        console.log(singleFake);
    }
}




