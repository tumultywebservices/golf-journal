import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import styles from '../styles/CourseHistory.module.css'

const GameStats = (): JSX.Element => {
  const [mapHoles, setMapHoles] = useState([])

  useEffect(() => {
    function mapRoundFromStorage() {
      const roundsInStorage = localStorage.getItem('rounds')
      const parsedRound = JSON.parse(roundsInStorage)

      if (mapHoles.length <= 0) {
        setMapHoles(parsedRound)
      }
    }

    mapRoundFromStorage()
  })

  return (
    <div
      className={`${styles.courseHistoryContainer} stories-courseHistoryContainer`}
    >
      <div className="d-block w-100">
        <h2>
          <small className="d-block">Bunker Hill</small>
        </h2>
      </div>
      <div className="d-flex justify-content-between">
        <h2>
          <small className="d-block">Final Stats</small>
          <small className="d-block">Score: {6 * 18}</small>
        </h2>
        <Button variant="outline-dark" className="mb-3" href="/profile">
          Home
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Yards</th>
            <th>Par</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {mapHoles.map((game) => (
            <tr key={game.round}>
              <td>{game.round}</td>
              <td>{game.yards}</td>
              <td>{game.par}</td>
              <td>{game.score}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="outline-dark" className="w-100 mb-3" href="/profile">
        Home
      </Button>
    </div>
  )
}

export default GameStats
