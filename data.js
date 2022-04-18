//STR - Strength 
//DEX - Dexterity 
//CON - Constitution
//INT - Intelligence
//WIS - Wisdom
//CHA - Charisma

export const titans = [

    {
        NAME: 'The Attack Titan',
        STR: '28 (+9)',
        DEX: '22 (+6)',
        CON: '24 (+7)',
        INT: '13 (+1)',
        WIS: '8 (-1)',
        CHA: '11 (+0)'

    },

    {
        NAME: 'Beast',
        STR: '30 (+10)',
        DEX: '25 (+7)',
        CON: '28 (+9)',
        INT: '21 (+5)',
        WIS: '16 (+3',
        CHA: '17 (+3)'

    },
    {
        NAME: 'Cart Titan',
        STR: '25 (+7)',
        DEX: '24 (+7)',
        CON: '22 (+6)',
        INT: '17 (+3)',
        WIS: '19 (+4)',
        CHA: '17 (+3)'

    },

    {
        NAME: 'The Colossal Titan',
        STR: '30 (+10)',
        DEX: '1 (-5)',
        CON: '30 (+10)',
        INT: '18 (+4)',
        WIS: '11 (+0)',
        CHA: '9 (-1)'

    },

    {
        NAME: 'Mindless Titan',
        STR: '24 (+7)',
        DEX: '15 (+2)',
        CON: '19 (+4)',
        INT: '1 (-5)',
        WIS: '17 (+3)',
        CHA: '1 (-5)'

    },

];

export const getAll = () => {
    return titans;
}

export const getItem = (val) => {
    const findTitans = (titans) => {
        return titans.NAME === val;
    }
    const result = titans.find(findTitans);
    return result;
}