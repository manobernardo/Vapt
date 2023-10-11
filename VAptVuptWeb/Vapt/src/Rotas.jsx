import React from 'react';
import { Route, Routes } from "react-router-dom";
import CadEmpresa from './components/CadEmpresa/index';
import Login from './components/Login/index';
import DadosEmpresa from './components/DadosEmpresa/index';


function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Login/> } />
                <Route path="cad-empresa" element={ <CadEmpresa/> } />
                <Route path="dados-empresa" element={ <DadosEmpresa/> } />
            </Routes>
        </>
    )
}

export default Rotas