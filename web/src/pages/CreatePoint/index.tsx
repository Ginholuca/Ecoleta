import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import {Map, TileLayer, Marker} from 'react-leaflet'

import api from '../../services/api'

import './styles.css'

import logo from '../../assets/logo.svg'

interface Item {
  id: number
  title: string
  image_url: string
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    api.get('items').then(res => {
      setItems(res.data)
    })
  }, [])
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/home">
          <FiArrowLeft/>
          Voltar para home
        </Link>
      </header>

      <form>
        <h1>Cadastro do <br/> ponto de coleta</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="name">Nome da entidade</label>
              <input
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
            type="text"
            name="name"
            id="name"
            ></input>
          </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={[-22.88375, -43.3202454]} zoom={15}>
          <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

          <Marker position={[-22.88375, -43.3202454]}/>
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select name="uf" id="uf">
                <option value="0" >Selecione uma UF</option>
              </select>
            </div>
            
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select name="city" id="city">
                <option value="0" >Selecione uma cidade</option>
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
          </legend>

          <ul className="items-grid">
            {items.map(item => (
              <li>
              <img src={item.image_url} alt={item.title} />
              <span>{item.title}</span>
            </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">
          Cadastrar ponto de coleta
        </button>
      </form>

    </div>
  )
}

export default CreatePoint