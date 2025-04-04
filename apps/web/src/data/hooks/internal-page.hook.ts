import { useContext } from 'react'
import InternalPageContext from '../contexts/internal-page.context'

const useInternalPage = () => useContext(InternalPageContext)
export default useInternalPage
