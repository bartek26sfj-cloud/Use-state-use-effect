import { useState } from 'react'

const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no' },
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
]

export default function Users() {
    const [users, setUsers] = useState(mockData)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')

    function handleAddUser() {
        if (!username || !email) return
        setUsers([...users, { username, email }])
        setUsername('')
        setEmail('')
    }

    return (
        <div className="card">
            <h2>👥 Brukerliste</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        <strong>{user.username}</strong> — {user.email}
                    </li>
                ))}
            </ul>

            <h3>Legg til ny bruker</h3>
            <input
                type="text"
                placeholder="Brukernavn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="E-post"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleAddUser}>Legg til bruker</button>
        </div>
    )
}
