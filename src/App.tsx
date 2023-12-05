import { Strings } from 'cafe-utility'
import { SwarmDonation } from '../lib/SwarmDonation'

function App() {
    return (
        <SwarmDonation
            batchId={'f22510af93e2cae15d2b0b386697e3bd4d47b3117504e0b98dc381318106adce'}
            ethereumAddress={Strings.randomHex(40)}
        />
    )
}

export default App
