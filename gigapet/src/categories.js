import vegImage from './assets/VegetableIcon.png';
import fruitImage from './assets/FruitsIcon.png';
import grainImage from './assets/GrainIcon.png';
import proteinImage from './assets/ProteinIcon.png';
import fatsImage from './assets/Fats&OilsIcon.png';
import sugarsImage from './assets/SugarsIcon.png';

export const categories = [
    'Vegetables',
    'Fruits',
    'Whole Grains',
    'Protein',
    'Fats & Oils',
    'Sugars'
]

export const categoryAssets = new Map([
    ['Vegetables', {
        colorA: '#EBF9EF',
        colorB: '#82D99C',
        icon: vegImage,
    }],
    ['Fruits', {
        colorA: '#F7F5DE',
        colorB: '#DBCF61',
        icon: fruitImage,
    }],
    ['Whole Grains', {
        colorA: '#FDEDE7',
        colorB: '#F38058',
        icon: grainImage,
    }],
    ['Protein', {
        colorA: '#EAF5FB',
        colorB: '#5BAEDC',
        icon: proteinImage,
    }],
    ['Fats & Oils', {
        colorA: '#EFEAFA',
        colorB: '#9678DE',
        icon: fatsImage,
    }],
    ['Sugars', {
        colorA: '#FFEBF6',
        colorB: '#FF66B9',
        icon: sugarsImage,
    }],
])

export default categories