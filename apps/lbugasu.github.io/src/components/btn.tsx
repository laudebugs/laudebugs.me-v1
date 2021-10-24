import { Button } from 'theme-ui'

const Btn = () => {
  function log() {
    console.log('Clicked')
  }
  return <Button onClick={log}>Click Me!!</Button>
}
export default Btn
