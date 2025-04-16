<<<<<<< HEAD
import React from 'react'

function Product(props) {

    const {
        product: { id, nome, preco, categoria, emStock },
        toggleStock,
        eliminarProduct
    } = props

    return (
        <div
            className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
            <h3 className='nome'>{nome}</h3>
            <h3 className='preco'>{preco}</h3>
            <h3 className='categoria'>{categoria}</h3>

            <button onClick={() => toggleStock(id)}>
                {emStock ? "Em Stock" : "Fora de Stock"}
            </button>

            <button className='delete' onClick={() => eliminarProduct(id)}>
                Eliminar
            </button>
        </div>
    )
}

export default Product
=======
import React, { useState } from 'react';
 
function Product(props) {
    const {
        product: { id, nome, preco, categoria, emStock },
        toggleStock,
        eliminarProduct,
        onSave
    } = props;
 
    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState(nome);
    const [editedPreco, setEditedPreco] = useState(preco);
 
    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };
 
 
    const handleSaveClick = () => {
        onSave(id, editedNome, editedPreco);
        setIsEditing(false);
    };
 
    return (
        <div className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
            {isEditing ? (
                <div>
                     <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        value={editedNome}
                        onChange={(e) => setEditedNome(e.target.value)}
                    />
                    <br/>
                    <br/>
                     <label htmlFor="preco">Preço</label>
                    <input
                        type="number"
                        value={editedPreco}
                        onChange={(e) => setEditedPreco(e.target.value)}
                    />
                </div>
            ) : (
                <>
                    <h3 className='nome'>{nome}</h3>
                    <h3 className='preco'>{preco}</h3>
                </>
            )}
 
            <h3 className='categoria'>{categoria}</h3>
 
            <button onClick={handleEditClick}>
                {isEditing ? "Cancelar" : "Editar"}
            </button>
 
            {isEditing && (
                <button onClick={handleSaveClick}>Guardar</button>
            )}
 
            <button onClick={() => toggleStock(id)}>
                {emStock ? "Em Stock" : "Fora de Stock"}
            </button>
            {!isEditing && ( 
            <button className='delete' onClick={() => eliminarProduct(id)}>
                Eliminar
            </button>
            )}
        </div>
    );
}
 
export default Product;
>>>>>>> f49d5ce (Exercício Concluído)
