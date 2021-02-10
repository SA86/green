import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  product: {
    height: [{ unit: 'px', value: 130 }],
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    background: '#fff',
    borderRadius: '8px',
    overflow: 'hidden',
    backgroundSize: '50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right bottom'
  },
  'mat-card': {
    padding: [{ unit: 'rem', value: 1 }, { unit: 'string', value: '!important' }, { unit: 'rem', value: 1 }, { unit: 'string', value: '!important' }],
    background: '#e3e3e3'
  },
  'sale-price': {
    color: '#d00ea0'
  },
  'sale-price strong': {
    fontSize: [{ unit: 'rem', value: 1 }],
    fontWeight: 'normal',
    color: '#222'
  },
  'regular-price': {
    color: '#777',
    textDecoration: 'line-through',
    fontSize: [{ unit: 'rem', value: 0.76 }]
  },
  'power h5': {
    display: 'inline'
  },
  percentoff: {
    color: '#a42873',
    fontWeight: 'normal',
    fontSize: [{ unit: 'rem', value: 0.76 }]
  },
  'percentoff span': {
    color: '#222'
  },
  'search-form-field': {
    marginRight: [{ unit: 'px', value: 60 }]
  },
  'details-column': {
    overflow: 'hidden',
    textAlign: 'right'
  },
  'btn-search': {
    right: [{ unit: 'px', value: -27 }]
  },
  '#select-dispensary': {
    width: [{ unit: 'px', value: 300 }]
  },
  img: {
    height: [{ unit: 'px', value: 150 }]
  },
  'mat-card': {
    height: [{ unit: 'px', value: 250 }],
    background: '#e3e3e3'
  },
  'mat-card-content': {
    margin: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    background: '#fff',
    borderRadius: '8px'
  },
  h1: {
    margin: [{ unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }]
  },
  h2: {
    margin: [{ unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }]
  },
  h3: {
    margin: [{ unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }]
  },
  h4: {
    margin: [{ unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }]
  },
  h5: {
    margin: [{ unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }]
  },
  h6: {
    margin: [{ unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }, { unit: 'rem', value: 0.25 }]
  },
  h1: {
    fontSize: [{ unit: 'rem', value: 1 }]
  },
  h4: {
    fontWeight: 'normal'
  },
  h5: {
    fontWeight: 'normal'
  },
  h6: {
    fontWeight: 'normal'
  }
});
