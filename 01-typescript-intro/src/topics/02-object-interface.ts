const skills: string[] = ['Bash','Counter','Healinf'];


// The interfaces help us to give types of a constant. 
interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
}


// We hover const and press Ctrl + . -> and give us the option to add missing properties from the Character interface.
const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],    
};

strider.hometown = 'Rivendell';

console.table(strider);




export {};