import { Strings } from 'cafe-utility'
import { SwarmDonation } from '../lib/SwarmDonation'

function App() {
    return (
        <>
            <SwarmDonation batchId={'00'.repeat(32)} ethereumAddress={Strings.randomHex(20)} />
        </>
    )
}

export default App
