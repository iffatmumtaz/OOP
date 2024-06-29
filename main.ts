
import inquirer from "inquirer"
import chalk from "chalk"
//create class
class person {
private _personality:string;
constructor(){
     this._personality='Anonymous';
   }

///user input

userInput(input:string){
    if (input.includes('talk to about yourself openly')){
        this._personality ='talk happly';
        
    }else if(input.includes('keep ur word to yourself')){
        this._personality='talk rudly';
    }
}
//return function

get personality() {
    return this._personality
}
}
//create objects
class Main{
    public async main(){
        //await called out
        const ans= await inquirer.prompt({
            //object create
            type:'list',
            name:'choices',
            message:chalk.yellow('tell your behaviour?'),
            choices : [
                '1: talk to others about my self.',
                '2: keep quite and dont ask questions.',

            ]
        })
        //create personal class
        let myperson = new person()

        myperson.userInput(ans.choices);
        ///check output
        console.log(`you are ${myperson.personality}`)
    }
}
const myobject = new Main();
myobject.main();