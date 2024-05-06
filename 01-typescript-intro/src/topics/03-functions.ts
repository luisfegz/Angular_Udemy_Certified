// We could not allow TypeScript the freedom to determine the type of a input or output constant

function addNumbers( a: number, b: number ): number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number ):string => {
    return `${ a + b }`;
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    return firstNumber * base
}

// const result: number = addNumbers(1,2);
// const result2: string = addNumbersArrow(1,2);
// const multiplyResult: number = multiply(5);

// Tipar un character
interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healthCharacter = ( character: Character, amount: number ) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}
healthCharacter( strider, 10);
healthCharacter( strider, 10);
strider.showHp();
export {};