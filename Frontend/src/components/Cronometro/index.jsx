
import './cronometro.css';

import React, { useState, useEffect, useCallback } from 'react';

const Cronometro = () => {
    // Data-alvo para a contagem regressiva
    const targetDate = new Date('November 30, 2024 00:00:00').getTime();

    // Função para calcular o tempo restante
    const calculateTimeRemaining = useCallback(() => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }, [targetDate]);

    // Estado para armazenar o tempo restante
    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    // Efeito para atualizar o tempo restante a cada segundo
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, [calculateTimeRemaining]);

    return (
        <>
            <div className="countdown">
                <h3>Nossa Black Friday Termina em:</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 bf">
                            <p>{timeRemaining.days}<br />
                                <span>dias</span>
                            </p>
                        </div>
                        <div className="col-md-3 bf">
                            <p>{timeRemaining.hours}<br />
                                <span>horas</span>
                            </p>
                        </div>
                        <div className="col-md-3 bf">
                            <p>{timeRemaining.minutes}<br />
                                <span>min</span>
                            </p>
                        </div>
                        <div className="col-md-3 bf">
                            <p>{timeRemaining.seconds}<br />
                                <span>seg</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cronometro;
