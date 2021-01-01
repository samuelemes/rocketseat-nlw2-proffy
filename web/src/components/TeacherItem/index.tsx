import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/116877275_3186911978051227_7969279134016246500_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeHaryEeEJ7EJZ7M8kJg7yGD7l6m63-FkaTuXqbrf4WRpPxY4Jdn1M3aUCJeOMHT1MfbgD6a39BP6yk4kcyl-f3n&_nc_ohc=BQHxqSC8kPkAX-VqmZ5&_nc_ht=scontent-amt2-1.xx&oh=9491a949c38289aa6790bc9a2ed35a27&oe=5F506B91" alt="Foto Perfil"/>
                <div>
                <strong>Samuel Lemes</strong>
                <span>Quimica</span>
                </div>
            </header>
            <p>
                Entusiastas das melhores tecnicas
                <br /><br/>
            </p>  

            <footer>
                <p>
                Preço/hora
                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
                </button>
            </footer>
        </article>
    )
}

