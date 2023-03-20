
const HEAD = (
  <div style={{
    width: '50px',
    height: '50px',
    border: 'solid 10px black',
    borderRadius: '100%',
    position: 'absolute',
    right: -30,
    top: 50,
  }} />
)

const BODY = (
  <div style={{
    width: '10px',
    height: '100px',
    backgroundColor: 'black',
    position: 'absolute',
    top: 120,
    right: 0,
  }}/>
)

const RIGHT_HAND = (
  <div style={{
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    position: 'absolute',
    top: 150,
    right: -100,
    rotate: '-30deg',
    transformOrigin: 'left bottom'
  }}/>
)

const LEFT_HAND = (
  <div style={{
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    position: 'absolute',
    top: 150,
    right: 10,
    rotate: '30deg',
    transformOrigin: 'right bottom'
  }}/>
)

const RIGHT_LEG = (
  <div style={{
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    position: 'absolute',
    top: 210,
    right: -90,
    rotate: '60deg',
    transformOrigin: 'left bottom'
  }}/>
)

const LEFT_LEG = (
  <div style={{
    width: '100px',
    height: '10px',
    backgroundColor: 'black',
    position: 'absolute',
    top: 210,
    right: 0,
    rotate: '-60deg',
    transformOrigin: 'right bottom'
  }}/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_HAND, LEFT_HAND, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses : number
}

const HangmanDrawing = ({ numberOfGuesses } : HangmanDrawingProps) => {
  return (
    <div style={{ position: 'relative'}}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div style={{
        width: '10px',
        height: '50px',
        backgroundColor: 'black',
        position: 'absolute',
        right: 0,
      }}/>
      <div style={{
        width: '250px',
        height: '10px',
        backgroundColor: 'black',
        marginLeft: '120px'
      }}/>
      <div style={{
        width: '10px',
        height: '500px',
        backgroundColor: 'black',
        marginLeft: '120px'
      }}/>
      <div style={{
        width: '250px',
        height: '10px',
        backgroundColor: 'black',
      }}/>
    </div>
  )
}

export default HangmanDrawing