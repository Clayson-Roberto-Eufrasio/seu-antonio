// src/components/CorpoDoModal/index.jsx
import { CorpoDoModalStyled } from "./styles"

const CorpoDoModal = ({ item, requestModal }) => {
    return (
        <CorpoDoModalStyled>
            <button onClick={requestModal}>X</button> {/* Botão para fechar o modal */}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            {item.image_url && <img src={item.image_url} alt={item.title} />} {/* Exibe imagem se disponível */}
            <p>R$ {item.value}</p>
        </CorpoDoModalStyled>
    )
}

export default CorpoDoModal