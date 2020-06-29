import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// não pode ter componente com letra minuscula 
//caso seja personalizado , e necessario a letra maiuscula

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passar os componentes Filhos aqui? */}
         <Filho nome="Pedro" />
          <Filho nome="Paulo" />  
         <Filho nome="Carla" />  
        </Pai>
    </div>
    , document.getElementById('root'))

// $('<h1>').html('React 2') jquery