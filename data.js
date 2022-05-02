//str - strength 
//dex - dexterity 
//con - Constitution
//int - intelligence
//wis - wisdom
//cha - charisma

export const titans = [

    {
        name: 'The Attack Titan',
        str: '28 (+9)',
        dex: '22 (+6)',
        con: '24 (+7)',
        int: '13 (+1)',
        wis: '8 (-1)',
        cha: '11 (+0)'

    },

    {
        name: 'Beast',
        str: '30 (+10)',
        dex: '25 (+7)',
        con: '28 (+9)',
        int: '21 (+5)',
        wis: '16 (+3',
        cha: '17 (+3)'

    },
    {
        name: 'Cart Titan',
        str: '25 (+7)',
        dex: '24 (+7)',
        con: '22 (+6)',
        int: '17 (+3)',
        wis: '19 (+4)',
        cha: '17 (+3)'

    },

    {
        name: 'The Colossal Titan',
        str: '30 (+10)',
        dex: '1 (-5)',
        con: '30 (+10)',
        int: '18 (+4)',
        wis: '11 (+0)',
        cha: '9 (-1)'

    },

    {
        name: 'Mindless Titan',
        str: '24 (+7)',
        dex: '15 (+2)',
        con: '19 (+4)',
        int: '1 (-5)',
        wis: '17 (+3)',
        cha: '1 (-5)'

    },

];

export const getAll = () => {
    return titans;
}

export const getItem = (val) => {
    const findTitans = (titans) => {
        return titans.name === val;
    }
    const result = titans.find(findTitans);
    return result;
}