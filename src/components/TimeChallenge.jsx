import { useState } from "react";
import PropTypes from 'prop-types';

TimerChallenge.propTypes = {
    title: PropTypes.string,
    targetTime: PropTypes.number,
  };

export default function TimerChallenge( {title, targetTime} )
{
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart()
    {
        setTimeout(() => { setTimerExpired(true);}, targetTime * 1000);

        setTimerStarted(true);
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}

            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>

            <p>
                <button onClick={handleStart}> {timerStarted ? 'Stop' : 'Start' } Challenge</button>
            </p>

            <p className={timerStarted ? 'active' : undefined}> {timerStarted ? 'Time is running...' : 'Timer inactive'}</p>
        </section>
    )
}
