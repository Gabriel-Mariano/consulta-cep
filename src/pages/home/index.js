import React, { useState, useRef } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';

import './style.css';
import {FaSearchLocation} from 'react-icons/fa';

import api from '../../services/api';



function Home(){
    const [cep,setCep] = useState('');
    const [data,setData] = useState(null);

    const inputRef = useRef();

  
    async function getCep(){

        if(cep === ''){
            return alert('Preencha os campos!')
        }

        try{
            const response = await api.get(`${cep}/json`);
            setData([response.data])
            // Verificar se existe o cep cadastrado
            if(response.data.erro === true){
                alert("Cep não encontrado na nossa base de dados!");
            }
            
    //  console.log(response); 
        }catch(err){
            alert("Formato inválido");
        }

        setCep('');
        inputRef.current.focus();
        
    }
    return(
        <>
        <Header/>
        <div className="container">
            <main>
                <h1>Consulte seu cep</h1> 
                <input type="text" 
                       placeholder="Informe aqui seu cep apenas com números"
                       value={cep}
                       onChange={ e => setCep(e.target.value) }
                       ref={inputRef}        
                />
             
                <button type="button" onClick={getCep}>
                    Pesquisar
                    <FaSearchLocation style={{ marginLeft:'10px'}}/>
                </button>            
            </main>
            <aside>
              <h1>Dados da Consulta</h1>  
              {data === null? 
                <span>Nenhum dado foi consultado ainda</span>
                :
                data.map((v,i)=>{
                  return (
                      <div key={i} className="container-data">
                          <span >Cep: {v.cep}</span>
                          <span>Logradouro: {v.logradouro}</span>
                          <span>Cidade: {v.localidade}</span>
                          <span>UF: {v.uf}</span>
                      </div>
                  )
              })}
            </aside>
        </div>
        <Footer/>
        </>
    )
}

export default Home;