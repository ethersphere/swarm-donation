import React from 'react'
import ReactDOM from 'react-dom/client'
import { SwarmDonation } from './SwarmDonation'

export function renderSwarmDonation(
    selector: string,
    ethereumAddress: string,
    batchId: string,
    buttonStyle?: React.CSSProperties
) {
    ReactDOM.createRoot(document.getElementById(selector)!).render(
        <React.StrictMode>
            <SwarmDonation batchId={batchId} ethereumAddress={ethereumAddress} buttonStyle={buttonStyle} />
        </React.StrictMode>
    )
}

;(globalThis as any).renderSwarmDonation = renderSwarmDonation
