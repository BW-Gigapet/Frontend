import React from 'react';
import styled from 'styled-components';
import vegImage from '../assets/VegetableIcon.png';
import fruitImage from '../assets/FruitsIcon.png';
import grainImage from '../assets/GrainIcon.png';
import proteinImage from '../assets/ProteinIcon.png';
import fatsImage from '../assets/Fats&OilsIcon.png';
import sugarsImage from '../assets/SugarsIcon.png';
import { AddModal } from './AddModal';


const AddFoodLaunch = () => {
    const [category, setCategory] = React.useState('')
    const [open, setOpen] = React.useState(false)

    function changeButtonHandler(e) {
        // trigger add modal
    }


    return (
        <div>
            <div className='add-food-btn'>
                <AddButton onClick={()=>{
                    setCategory('')
                    setOpen(true)
                }}> + </AddButton>
            </div>
        
            <Icons className='add-food-icons'>
                <IconContainer onClick={()=>{
                    setCategory('Vegetable')
                    setOpen(true)
                }}>
                    <VegButton>
                        <img src={ vegImage } alt='vegetable icon' />
                    </VegButton>
                    <p>Vegetable</p>
                </IconContainer>
                <IconContainer onClick={()=>{
                    setCategory('Fruits')
                    setOpen(true)
                }}>
                    <FruitButton>
                        <img src={ fruitImage } alt='fruit icon' />
                    </FruitButton>
                    <p>Fruits</p>
                </IconContainer>
                <IconContainer onClick={()=>{
                    setCategory('Whole Grains')
                    setOpen(true)
                }}>
                    <GrainButton>
                        <img src={ grainImage } alt='grain icon' />
                    </GrainButton>
                    <p>Whole Grains</p>
                </IconContainer>
                <IconContainer onClick={()=>{
                    setCategory('Protein')
                    setOpen(true)
                }}>
                    <ProteinButton>
                        <img src={ proteinImage } alt='protein icon' />
                    </ProteinButton>
                    <p>Protein</p>
                </IconContainer>
                <IconContainer onClick={()=>{
                    setCategory('Fats and Oils')
                    setOpen(true)
                }}>
                    <FatsButton>
                        <img src={ fatsImage } alt='fats and oils icon' />
                    </FatsButton>
                    <p>Fats and Oils</p>
                </IconContainer>
                <IconContainer onClick={()=>{
                    setCategory('Sugars')
                    setOpen(true)
                }}>
                <SugarsButton>
                    <img src={ sugarsImage } alt='sugars icon' />
                </SugarsButton>
                <p>Sugars</p>
                </IconContainer>
            </Icons>
            <AddModal {...{category,open,setOpen}} />
        </div>
    )
}

export default AddFoodLaunch;

const Icons = styled.div`
    width: 319px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px;
   
`;

const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
`;

const AddButton = styled.button`
    width: 40px;
    height: 40px;
    background-color: #247CAD;
    color: white;
    border-radius: 50%;
    font-size: 2rem;
    border: none;
    cursor: pointer;
`;

const VegButton = styled.button`
    width: 80px;
    height: 80px;
    text-decoration: none;
    border: none;
    
    background-color: #EBF9EF;
    cursor: pointer;
`;

const FruitButton = styled.button`
    width: 80px;
    height: 80px;
    text-decoration: none;
    border: none;
    // padding: 10px;
    background-color: #F7F5DE;
    cursor: pointer;
`;

const GrainButton = styled.button`
    width: 80px;
    height: 80px;
    text-decoration: none;
    border: none;
    // padding: 0;
    background-color: #FDEDE7;
    cursor: pointer;
`;

const ProteinButton = styled.button`
    width: 80px;
    height: 80px;
    text-decoration: none;
    border: none;
    // padding: 0;
    background-color: #EAF5FB;
    cursor: pointer;
`;
const FatsButton = styled.button`
    width: 80px;
    height: 80px;
    text-decoration: none;
    border: none;
    // padding: 0;
    background-color: #EFEAFA;
    cursor: pointer;
`;
const SugarsButton = styled.button`
    width: 80px;
    height: 80px;
    text-decoration: none;
    border: none;
    // padding: 0;
    background-color: #FFEBF6;
    cursor: pointer;
`;