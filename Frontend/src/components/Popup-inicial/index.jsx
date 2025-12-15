import React from 'react';
import './popup.css';
import SOS from '../../assets/Site.jpg'



const Popup = () => {

    function onClose() {
        const popupContainer = document.querySelector('.popup-container');
        popupContainer.style.display = 'none';
    }

    return (
        <div className="popup-container">
            <div className="popup-content">
                <img src={SOS} alt="Imagem Popup" />
                <button className="popup-close-button" onClick={onClose}>Fechar</button>
            </div>
        </div>
    );
};

export default Popup;