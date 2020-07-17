#! /usr/bin/env node

const path = require('path')

const configBase = 'https://build.ford.com/dig/Ford/Bronco/2021/HD-FULL/Config'

const colors = {
  HX: 'Antimatter Blue Metallic',
  SB: 'Cyber Orange Pearl',
  NE: 'Cactus Gray',
  M7: 'Carbonized Gray Metallic',
  YZ: 'Oxford White',
  PQ: 'Race Red',
  D4: 'Rapid Red',
  KU: 'Area 51',
  G1: 'Shadow Black',
  JS: 'Iconic Silver Metallic',
  E7: 'Velocity Blue'
}

const trims = {
  base: {
    name: 'Base',
    bodies: {
      twoDoor: 'E5A',
      fourDoor: 'E5B'
    },
    equipment: {
      number: 10,
      variants: [
        '1A'
      ]
    }
  },
  bigBend: {
    name: 'Big Bend',
    bodies: {
      twoDoor: 'E5A',
      fourDoor: 'E5B'
    },
    equipment: {
      number: 22,
      variants: [
        '1A',
        '2A'
      ]
    }
  },
  blackDiamond: {
    name: 'Black Diamond',
    bodies: {
      twoDoor: 'E5A',
      fourDoor: 'E5B'
    },
    equipment: {
      number: 32,
      variants: [
        '1A',
        '2A'
      ]
    }
  },
  outerBanks: {
    name: 'Outer Banks',
    bodies: {
      twoDoor: 'E5A',
      fourDoor: 'E5B'
    },
    equipment: {
      number: 31,
      variants: [
        '2A',
        '3A',
        '4A'
      ]
    }
  },
  badlands: {
    name: 'Badlands',
    bodies: {
      twoDoor: 'E5C',
      fourDoor: 'E5D'
    },
    equipment: {
      number: 33,
      variants: [
        '1A',
        '2A',
        '3A',
        '4A'
      ]
    }
  },
  wildTrak: {
    name: 'WildTrak',
    bodies: {
      twoDoor: 'E5C',
      fourDoor: 'E5D'
    },
    equipment: {
      number: 35,
      variants: [
        '2A',
        '3A',
        '4A'
      ]
    }
  },
  firstEdition: {
    name: 'First Edition',
    bodies: {
      twoDoor: 'E5F',
      fourDoor: 'E5E'
    },
    equipment: {
      number: 95,
      variants: [
        '1A',
        '2A',
        '3A',
        '4A'
      ]
    }
  }
}

const bodyKeyNames = {
  twoDoor: 'Two Door',
  fourDoor: 'Four Door'
}

const imgNumbers = [1,2,3]

const interiorOrExteriorChoices = {
  INT: 'Interior',
  EXT: 'Exterior'
}

const buildUrl = ({ equipmentCode, bodyCode, paintCode, interiorOrExterior, imgNumber }) => {
  return `${configBase}[|Ford|Bronco|2021|1|1.|${equipmentCode}.${bodyCode}..${paintCode}...RET.]/${interiorOrExterior}/${imgNumber}/vehicle.png`
}

Object.keys(trims).forEach(trimKey => {
  const trim = trims[trimKey]
  Object.keys(trim.bodies).forEach(bodyKey => {
    const bodyCode = trim.bodies[bodyKey]
    trim.equipment.variants.forEach(variant => {
      const equipmentCode = '' + trim.equipment.number + variant
      Object.keys(colors).forEach(paintCode => {
        Object.keys(interiorOrExteriorChoices).forEach(interiorOrExterior => {
          imgNumbers.forEach(imgNumber => {
            const url = buildUrl({ equipmentCode, bodyCode, paintCode, interiorOrExterior, imgNumber })
            const description = `${bodyKeyNames[bodyKey]} ${trim.name} in ${colors[paintCode]} ${interiorOrExteriorChoices[interiorOrExterior]} Variant ${variant} Image ${imgNumber}`
            console.log(description)
            console.log(url)
            console.log('\n')
          })
        })
      })
    })
  })
})