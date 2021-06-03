/* eslint-disable camelcase */
import fs from 'fs'
import fetch from 'node-fetch'

const transform = async () => {
  const req = await fetch(
    'https://raw.githubusercontent.com/datagir/ecolab-alimentation/master/data/out/Agribalyse.json'
  )
  const res = await req.json()
  const filteredData = res
    .filter(
      (product) =>
        product.groupe === 'fruits, légumes, légumineuses et oléagineux'
    )
    // eslint-disable-next-line camelcase
    .map(({ nom_francais, groupe, sous_groupe, impact_environnemental }) => ({
      nom_francais,
      groupe,
      sous_groupe,
      changement_climatique: impact_environnemental['Changement climatique'],
    }))
  fs.writeFileSync('../out/alimentation.json', JSON.stringify(filteredData))
}

transform()
