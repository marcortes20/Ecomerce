import { ReactNode, useState } from 'react'
import ProductsContext from './ProductsContext'

const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [categoryId, setCategoryId] = useState(0)
    const [searchText, setSearchText] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    return (
        <ProductsContext.Provider value={{ categoryId, setCategoryId, searchText, setSearchText, pageNumber, setPageNumber }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider