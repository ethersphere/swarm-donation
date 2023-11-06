import { DonateButton } from './DonateButton'
import { TimeToLiveText } from './TimeToLiveText'
import { TopUpButton } from './TopUpButton'

interface Props {
    ethereumAddress: string
    batchId: string
    buttonStyle?: React.CSSProperties
}

export function SwarmDonation({ ethereumAddress, batchId, buttonStyle }: Props) {
    const style = {
        display: 'flex',
        flexDirection: 'column' as 'column',
        gap: '1em'
    }

    return (
        <div style={style}>
            <p>
                This page was uploaded with batch ID <code>{batchId}</code>
            </p>
            <TimeToLiveText batchId={batchId} />
            <div style={{ display: 'flex', gap: '1em' }}>
                <TopUpButton batchId={batchId} style={buttonStyle} />
                <DonateButton ethereumAddress={ethereumAddress} style={buttonStyle} />
            </div>
        </div>
    )
}
