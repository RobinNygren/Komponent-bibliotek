import React, {useState} from "react";
import './Cards.scss';

type Card = {
    text: string;

}

type CardProp = {
    cards: Card[]
}

const Cards: React.FC<CardProp> = ({cards}) => {
    const [currentCard, setCurrentCard] = useState(0)


    const next = () => {
        setCurrentCard((next) => (next + 1) % cards.length)
    }

    const previous = () => {
        setCurrentCard((prev => 
            prev === 0 ? cards.length - 1 : prev - 1))

    }




    return (
        <>
            <h2 className="text">{cards[currentCard].text}</h2>
        <div className="card">
            <button className="cardButton" onClick={previous}>{"<"}</button>
            <button className ="cardButton" onClick={next}>{">"}</button>
        </div>
        </>
    );
};




export default Cards