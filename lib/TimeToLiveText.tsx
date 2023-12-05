import axios from 'axios'
import { useEffect, useState } from 'react'

interface Props {
    batchId: string
}

export function TimeToLiveText({ batchId }: Props) {
    const [timeToLive, setTimeToLive] = useState<number | null>(null)
    const [erroredOut, setErroredOut] = useState(false)

    useEffect(() => {
        getCurrentTimeToLive(batchId)
            .then(setTimeToLive)
            .catch(error => {
                console.error(error)
                setErroredOut(true)
            })
    })

    if (erroredOut) {
        return <p>You need a local Bee to fetch time to live</p>
    }

    if (!timeToLive) {
        return <p>Loading time to live...</p>
    }

    return <p>Paid until: {new Date(Date.now() + timeToLive * 1000).toDateString()}</p>
}

async function getCurrentTimeToLive(batchId: string): Promise<number | null> {
    const stamps = (await axios('http://localhost:1635/stamps')) as any
    const stamp = stamps.data.stamps.find((stamp: any) => stamp.batchID === batchId)
    return stamp?.batchTTL || null
}
