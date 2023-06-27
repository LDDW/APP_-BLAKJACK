import React, {useState} from 'react';
import './Game.css';

import DealerZone from '../dealerZone/DealerZone';
import DiscardPileZone from '../discardPileZone/DiscardPileZone';
import RuleZone from "../ruleZone/RuleZone";
import PlayerZone from "../playerZone/PlayerZone";
import BetZone from '../betZone/BetZone';
import ChatBox from '../ChatBox/ChatBox';

const playerNames = ["The-Jules6666", "Pierre", "Paul", "Jacques", "Sophie", "Marie", "Louise"];
// Récupération du status du joueur passé en props de PlayerZone
const playerStatuses = ["not-played", "not-played", "not-played", "playing", "played", "played", "played"]; // Exemple de statuts
// Récupération des valeurs des cartes
const cardValues = [10, 20, 15, 0, 18, 16, 20];

const Game = () => {
    const [betValue, setBetValue] = useState(0);
    const [chip, setChip] = useState<{
        chipred: number,
        chipblue: number,
        chipgreen: number
    }>({
        chipred: 0,
        chipblue: 0,
        chipgreen: 0,
    });


    return (
        <div className="App">
            <header className="App-header">
                <div className="elements">
                    <DealerZone/>
                    <DiscardPileZone/>
                    <PlayerZone
                        chip={chip}
                        playerNames={playerNames}
                        playerStatuses={playerStatuses}
                        cardValues={cardValues}
                    />
                </div>
                <div className='BetZone'>
                    <BetZone
                        minValue={2}
                        betValue={betValue}
                        chip={chip}
                        setBetValue={setBetValue}
                        setChip={setChip}
                    />
                    <ChatBox messages={["Message 1", "Message 2", "Message 3", "Message 4"]}/>
                </div>
                <RuleZone/>
            </header>
        </div>
    );
};


export default Game;
