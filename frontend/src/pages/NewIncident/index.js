import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';

import api from '../../services/api'

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId')
    const history = useHistory();

     function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };
        
        try{
             api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
            history.push('/profile');
        } catch(err) {
            alert("Erro ao cadastrar caso, tente novamente")
        }
    }


    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Be the Hero"/>
                    <h1>Cadastrar novo Caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>
                    <Link className="back-link"to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        type="text" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Titilo do caso"
                    />
                    <textarea 
                        type="email" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Descrição"
                    />
                    <input 
                        type="text" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Valor em reais"
                    />
                    
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}