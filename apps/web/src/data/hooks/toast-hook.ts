import { useContext } from 'react'
import ToastContext from '../contexts/toast.context'

const useToast = () => useContext(ToastContext)
export default useToast
