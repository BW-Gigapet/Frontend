import React from 'react';
import vegImage from '../assets/VegetableIcon.png';
import fruitImage from '../assets/FruitsIcon.png';
import grainImage from '../assets/GrainIcon.png';
import proteinImage from '../assets/ProteinIcon.png';
import fatsImage from '../assets/Fats&OilsIcon.png';
import sugarsImage from '../assets/SugarsIcon.png';


const AddFoodLaunch = () => {

    function changeButtonHandler(e) {
        // trigger add modal
    }


    return (
        <div>
            <div className='add-food-btn'>
                <button> + </button>
            </div>
            <div className='add-food-icons'>
                <button>
                    <img src={ vegImage } alt='vegetable icon' />
                </button>
                <button>
                    <img src={ fruitImage } alt='fruit icon' />
                </button>
                <button>
                    <img src={ grainImage } alt='grain icon' />
                </button>
                <button>
                    <img src={ proteinImage } alt='protein icon' />
                </button>
                <button>
                    <img src={ fatsImage } alt='fats and oils icon' />
                </button>
                <button>
                    <img src={ sugarsImage } alt='sugars icon' />
                </button>
            </div>

        </div>
    )
}

export default AddFoodLaunch;

// const VegImage = styled.components