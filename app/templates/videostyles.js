export default {
  color: 'green',
  background: 'linear-gradient(red, green)',

  '@media (max-width: 600px)': {
    color: 'red',
    background: 'linear-gradient(blue, green)'
  },

  '@media (min-width: 768px)': {
    color: 'blue',
    background: 'linear-gradient(white, green)'
  }
}
