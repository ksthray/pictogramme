import React, {useState, useEffect} from "react"
import moment from "moment"

import { Container } from "reactstrap"
import {Containt, CountDownStyle, SVG, BarSlim} from "./special.style"

const Special = (props) => {
    const [state, setState] = useState({
        jours: undefined,
        heure: undefined,
        minute: undefined,
        seconde: undefined,
    })
    
    useEffect(() => {
        const interval = setInterval(() => {
            const { timeTillDate, timeFormat } = props;
            const then = moment(timeTillDate, timeFormat);
            const now = moment();
            const countdown = moment(then - now);
            const jours = countdown.format('D');
            const heure = countdown.format('HH');
            const minute = countdown.format('mm');
            const seconde = countdown.format('ss');
    
            setState({ jours, heure, minute, seconde });
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    },)
    // Mapping the date values to radius values
    const joursRadius = mapNumber(state.jours, 30, 0, 0, 360);
    const heureRadius = mapNumber(state.heure, 24, 0, 0, 360);
    const minuteRadius = mapNumber(state.minute, 60, 0, 0, 360);
    const secondeRadius = mapNumber(state.seconde, 60, 0, 0, 360);

    if (!state.seconde) {
        return null;
    }
    return (
        <Containt>
            <Container>
                <h2>
                    Spécial mois de la femme
                </h2>
                <BarSlim/>
                <p>Femme répaire, femme icone</p> <br/><br/>
                <CountDownStyle>
                {state.jours && (
                        <div className="countdown-item">
                            <SVGCircle radius={joursRadius} />
                            {state.jours}
                            <span>jours</span>
                        </div>
                    )}
                    {state.heure && (
                        <div className="countdown-item">
                            <SVGCircle radius={heureRadius} />
                            {state.heure}
                            <span>heures</span>
                        </div>
                    )}
                    {state.minute && (
                        <div className="countdown-item">
                            <SVGCircle radius={minuteRadius} />
                            {state.minute}
                            <span>minutes</span>
                        </div>
                    )}
                    {state.seconde && (
                        <div className="countdown-item">
                            <SVGCircle radius={secondeRadius} />
                            {state.seconde}
                            <span>secondes</span>
                        </div>
                    )}
                </CountDownStyle>
            </Container>
        </Containt>
    )
}

const SVGCircle = ({ radius }) => (
    <SVG>
        <path
            fill="none"
            stroke="#D91480"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </SVG>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    
    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');
    
    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

export default Special;