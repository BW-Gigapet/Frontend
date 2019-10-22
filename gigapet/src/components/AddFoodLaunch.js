import React from 'react';
import styled from 'styled-components';
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
                <AddButton> + </AddButton>
            </div>
            <Icons className='add-food-icons'>
                <IconContainer>
                    <Buttons>
                        <VegImage src={ vegImage } alt='vegetable icon' />
                    </Buttons>
                    <p>Vegetable</p>
                </IconContainer>
                <IconContainer>
                    <Buttons>
                        <img src={ fruitImage } alt='fruit icon' />
                    </Buttons>
                    <p>Fruits</p>
                </IconContainer>
                <IconContainer>
                    <Buttons>
                        <img src={ grainImage } alt='grain icon' />
                    </Buttons>
                    <p>Whole Grains</p>
                </IconContainer>
                <IconContainer>
                    <Buttons>
                        <img src={ proteinImage } alt='protein icon' />
                    </Buttons>
                    <p>Protein</p>
                </IconContainer>
                <IconContainer>
                    <Buttons>
                        <img src={ fatsImage } alt='fats and oils icon' />
                    </Buttons>
                    <p>Fats and Oils</p>
                </IconContainer>
                <IconContainer>
                <Buttons>
                    <img src={ sugarsImage } alt='sugars icon' />
                </Buttons>
                <p>Sugars</p>
                </IconContainer>
            </Icons>

        </div>
    )
}

export default AddFoodLaunch;

const Icons = styled.div`
    width: 500px;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: .5rem;
`;

const AddButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: #247CAD;
    color: white;
    border-radius: 50%;
    font-size: 2rem;
    border: none;
`;

const Buttons = styled.button`
    width: 70px;
    height: 70px;
    text-decoration: none;
    border: none;
    padding: 0;
    background-color: #EBF9EF;
`;

const VegImage = styled.img`
    width: 50px;
    height: 50px;
    // padding: 3%;
    // background-color: #EBF9EF;
`;