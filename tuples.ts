const drink = {
    color: 'brown',
    carbonated: true,
    suger: 40
}

type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40];
const spring: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0]