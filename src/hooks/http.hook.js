import {useState, useCallback} from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (url, method = 'POST', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)                      
        headers['Content-Type'] = 'application/json'                         
        console.log("headers =", headers)        
        console.log("body =", body)
      }     
      const baseUrl = 'https://us-central1-react-redux-331905.cloudfunctions.net'
      const response = await fetch(
                                    baseUrl+url,
                                    {method, body, headers})
      console.log('response = ',response)                                    
      const data = await response.json()
      console.log('data = ',data)                                    

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)

      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return  {request} //{ loading, request, error, clearError }
}