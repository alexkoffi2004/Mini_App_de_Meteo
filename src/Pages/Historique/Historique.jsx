import { useEffect, useState } from 'react'
import './historique.css'

const Historique = () => {

  const [history, setHistory] = useState([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('history')) || []
    setHistory(saved)
  }, [])

  return (
    <>
    <div className='historique_container'>
      <h1>Historique associé à vos recherche</h1>
      <div className='historique_card'>
      {history.length === 0 ? (
        <p>Aucune ville recherchée pour le moment.</p>
      ) : (
        <ul className="history_list">
          {history.map((city, i) => (
            <li key={i}>{city}</li>
          ))}
        </ul>
      )}
      </div>
    </div>
    </>
  );
}

export default Historique