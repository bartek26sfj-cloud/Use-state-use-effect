import { useState } from 'react'

export default function CookieClicker() {
    const [score, setScore] = useState(0)

    return (
        <div className="card">
            <h2>Cookie Clicker</h2>
            <p>Poeng: {score}</p>
            <button onClick={() => setScore(score + 1)}>
                <img src="cookie.png" alt="Image of a Cookie" width={100} />
            </button>
        </div>
    )
}
