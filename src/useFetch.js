import { useEffect, useState } from 'react'

const useFetch = url => {
    const [state, setState] = useState({ data: null, loading: true })
    useEffect(() => {
        setState({ data: null, loading: false })
        fetch(url)
        .then(x => x.text())
        .then(y => {
            setState({ data: y, loading: false })
        })
    }, [url])

    return state;
}

export default useFetch
