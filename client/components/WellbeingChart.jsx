import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAspectData, deleteEntryData } from '../actions'
import { useParams } from 'react-router-dom'
import data from '../data.json'
import Feeling from './Feeling'

function WellbeingChart () {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const aspectTahaWhanau = useSelector(state => state.whare?.filter(entry => entry.section === 'tahaWhanau'))
  const aspectTahaWairua = useSelector(state => state.whare?.filter(entry => entry.section === 'tahaWairua'))
  const aspectTahaHinengaro = useSelector(state => state.whare?.filter(entry => entry.section === 'tahaHinengaro'))
  const aspectTahaTinana = useSelector(state => state.whare?.filter(entry => entry.section === 'tahaTinana'))
  const aspectWhenua = useSelector(state => state.whare?.filter(entry => entry.section === 'whenua'))

  return (
    <section id="wellbeingChart">
      <h1>TŌKU WHARE - {user.name}</h1>
      <h2>Taha Whānau</h2>
      {aspectTahaWhanau.map((entry) => {
        const date = new Date(entry.createdAt)
        return (
          <div key={entry.id} className="entryWrap">
            <div className="entry">
              <div className="feelingWrap">
                <Feeling feeling={entry.feeling} />
              </div>
              <h4>Posted on: {date.getDate()}/{date.getMonth() + 1}/{date.getYear() - 100}</h4>
            </div>
            <p>{entry.text}</p>
          </div>
        )
      })}
      <h2>Taha Wairua</h2>
      {aspectTahaWairua.map((entry) => {
        const date = new Date(entry.createdAt)
        return (
          <div key={entry.id} className="entryWrap">
            <div className="entry">
              <div className="feelingWrap">
                <Feeling feeling={entry.feeling} />
              </div>
              <h4>Posted on: {date.getDate()}/{date.getMonth() + 1}/{date.getYear() - 100}</h4>
            </div>
            <p>{entry.text}</p>
          </div>
        )
      })}
      <h2>Taha Hinengaro</h2>
      {aspectTahaHinengaro.map((entry) => {
        const date = new Date(entry.createdAt)
        return (
          <div key={entry.id} className="entryWrap">
            <div className="entry">
              <div className="feelingWrap">
                <Feeling feeling={entry.feeling} />
              </div>
              <h4>Posted on: {date.getDate()}/{date.getMonth() + 1}/{date.getYear() - 100}</h4>
            </div>
            <p>{entry.text}</p>
          </div>
        )
      })}
      <h2>Taha Tinana</h2>
      {aspectTahaTinana.map((entry) => {
        const date = new Date(entry.createdAt)
        return (
          <div key={entry.id} className="entryWrap">
            <div className="entry">
              <div className="feelingWrap">
                <Feeling feeling={entry.feeling} />
              </div>
              <h4>Posted on: {date.getDate()}/{date.getMonth() + 1}/{date.getYear() - 100}</h4>
            </div>
            <p>{entry.text}</p>
          </div>
        )
      })}
      <h2>Whenua</h2>
      {aspectWhenua.map((entry) => {
        const date = new Date(entry.createdAt)
        return (
          <div key={entry.id} className="entryWrap">
            <div className="entry">
              <div className="feelingWrap">
                <Feeling feeling={entry.feeling} />
              </div>
              <h4>Posted on: {date.getDate()}/{date.getMonth() + 1}/{date.getYear() - 100}</h4>
            </div>
            <p>{entry.text}</p>
          </div>
        )
      })}
    </section>
  )
}

export default WellbeingChart
