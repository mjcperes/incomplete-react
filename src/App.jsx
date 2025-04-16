import { useState } from 'react'
import './App.css'
import productsJson from './assets/products.json'
import Product from './components/Product'
<<<<<<< HEAD

function App() {

=======
 
function App() {
 
>>>>>>> f49d5ce (Exercício Concluído)
  const [products, setProducts] = useState(productsJson)
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [categoria, setCategoria] = useState("")
  const [message, setMessage] = useState("")
<<<<<<< HEAD

  const eliminarProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId))
  }

  const toggleStock = (productId) => {

    const productsCopy = [...products]

    // Encontrar o product com o id que queremos alterar
    const productToToggle = productsCopy.find(product => product.id === productId)
    productToToggle.emStock = !productToToggle.emStock

    setProducts(productsCopy)

  }

  const addProduct = (nome, preco, categoria) => {
    // adiciona um botão com dados dummy

=======
 
  const handleSaveProduct = (id, nome, preco) => {
    setProducts(prevProducts =>
        prevProducts.map(product =>
            product.id === id ? { ...product, nome, preco } : product
        )
    );
};
 
  const eliminarProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId))
  }
 
  const toggleStock = (productId) => {
 
    const productsCopy = [...products]
 
    // Encontrar o product com o id que queremos alterar
    const productToToggle = productsCopy.find(product => product.id === productId)
    productToToggle.emStock = !productToToggle.emStock
 
    setProducts(productsCopy)
 
  }
 
  const addProduct = (nome, preco, categoria) => {
    // adiciona um botão com dados dummy
 
>>>>>>> f49d5ce (Exercício Concluído)
    const newProduct = {
      id: Date.now(),
      nome,
      preco,
      categoria,
      emStock: true
    }
<<<<<<< HEAD

    setProducts([newProduct, ...products])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

=======
 
    setProducts([newProduct, ...products])
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
 
>>>>>>> f49d5ce (Exercício Concluído)
    if (!nome || !preco || !categoria) {
      setMessage("Please fill all the fields.")
      return
    }
<<<<<<< HEAD

=======
 
>>>>>>> f49d5ce (Exercício Concluído)
    const form = e.target
    addProduct(form.nome.value, form.preco.value, form.categoria.value)
    setNome("")
    setPreco("")
    setCategoria("")
<<<<<<< HEAD

    setMessage("Product Inserted.")
  }

  return (<div className='App'>

    <h1>Adicionar Produto</h1>

=======
 
    setMessage("Product Inserted.")
  }
 
  return (<div className='App'>
 
    <h1>Adicionar Produto</h1>
 
>>>>>>> f49d5ce (Exercício Concluído)
    <form onSubmit={handleSubmit} className='add-product'>
      <div className='form-control'>
        <label htmlFor="nome">Nome</label>
        <input onChange={(e) => setNome(e.target.value)} value={nome} name='nome' type="text" />
      </div>
      <div className='form-control'>
        <label htmlFor="preco">Preço</label>
        <input onChange={(e) => setPreco(e.target.value)} value={preco} name='preco' type="number" />
      </div>
      <div className='form-control'>
        <label htmlFor="categoria">Categoria</label>
        <input onChange={(e) => setCategoria(e.target.value)} value={categoria} name='categoria' type="text" />
      </div>
<<<<<<< HEAD

      <div>
        {message}
      </div>

      <button type='submit' className='add'> Adicionar </button>
    </form>


=======
 
      <div>
        {message}
      </div>
 
      <button type='submit' className='add'> Adicionar </button>
    </form>
 
 
>>>>>>> f49d5ce (Exercício Concluído)
    <div className='products'>
      {products.map(product =>
        <Product
          key={product.id}
          product={product}
          toggleStock={toggleStock}
          eliminarProduct={eliminarProduct}
<<<<<<< HEAD
=======
          onSave={handleSaveProduct}
>>>>>>> f49d5ce (Exercício Concluído)
        />)}
    </div>
  </div>
  )
}
<<<<<<< HEAD

=======
 
>>>>>>> f49d5ce (Exercício Concluído)
export default App
