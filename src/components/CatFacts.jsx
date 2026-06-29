import { useState, useEffect } from 'react'

export default function CatFacts() {
    const [facts, setFacts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://catfact.ninja/facts?limit=5')
            .then((res) => {
                if (!res.ok) throw new Error('Klarte ikke hente kattfakta')
                return res.json()
            })
            .then((data) => {
                setFacts(data.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false)
            })
    }, [])

    return (
        <div className="card">
            <h2>🐱 Kattfakta</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Feil: {error}</p>}
            {!loading && !error && (
                <ul>
                    {facts.map((item, index) => (
                        <li key={index}>{item.fact}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
