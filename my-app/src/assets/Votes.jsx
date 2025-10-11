import {useState} from 'react';
import {Col, Row, Button} from 'react-bootstrap';
import Emojis from "./Emojis.jsx";

const emojiNames = {
    smile: '😄',
    cry: '🤣',
}

const counterInitialValue = {
    smile: 0,
    cry: 0,
};

const Votes = () => {
    const [counter, setCounter] = useState({...counterInitialValue});
    const [hasWinner, setHasWinner] = useState(false);
    const [winnerName, setWinnerName] = useState('');


    const increment = (name) => {
        const localCounters = {...counter};
        localCounters [name] += 1;
        setCounter(localCounters);
    }

    const findWinner = () => {
        // console.log(Object.entries(counter));
        const [name]= Object.entries(counter).reduce((acc, item) => {
            const [name, value] = item;
            const [accName, accValue] = acc;

            if (value > accValue) {
                return item;
            }

            return acc;
        }, ['', 0])

        setWinnerName(name)
        setHasWinner(true);
    }

    return (
        <>
            <Row>
                <Col>
                    <Emojis
                        emoji={emojiNames.cry}
                        counterValue={counter.cry}
                        onClick={increment}
                    />
                </Col>
                <Col>
                    <Emojis
                        emoji={emojiNames.smile}
                        counterValue={counter.smile}
                        onClick={increment}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={findWinner}>Find winner</Button>
                    <hr/>
                    {hasWinner && <h1>Winner is: {winnerName} - {emojiNames[winnerName]} | {counter[winnerName]}</h1>}
                </Col>
            </Row>
        </>
    );
};

export default Votes;