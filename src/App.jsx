import { useState } from 'react'
import './index.css'
import FilterBar from './components/FilterBar'
import ProductList from './components/ProductList'

const productsData = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = productsData.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Product Search App</h1>
        <p>Find your favorite products across categories with real-time filtering.</p>
      </header>
      
      <main className="main-content">
        <FilterBar 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
          categories={['All', 'Electronics', 'Clothing', 'Home']}
        />
        
        <ProductList products={filteredProducts} />
      </main>
    </div>
  )
}

export default App
