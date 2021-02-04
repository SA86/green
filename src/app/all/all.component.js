import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  product: {
    height: [{ unit: 'px', value: 200 }],
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    background: '#fff',
    borderRadius: '8px'
  },
  'mat-card': {
    padding: [{ unit: 'rem', value: 1 }, { unit: 'string', value: '!important' }, { unit: 'rem', value: 1 }, { unit: 'string', value: '!important' }],
    background: '#e3e3e3'
  },
  'sale-price': {
    color: '#d00ea0'
  },
  'regular-price': {
    color: '#777',
    textDecoration: 'line-through'
  },
  'power h5': {
    display: 'inline'
  },
  percentoff: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: [{ unit: 'rem', value: 1 }]
  },
  'search-form-field': {
    marginRight: [{ unit: 'px', value: 60 }]
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
