import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom'
import './styles.css';
import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg'
import api from '../../services/api';

export default function Logon (){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessions', { id })
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        }catch(err){
            alert("Falha no login, tente novamente " + err);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Be the Hero"/> 

                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Seu ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
        
    );
}