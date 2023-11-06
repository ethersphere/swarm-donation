import { useEffect, useState } from 'react'
import { getCurrentTimeToLive } from 'swarm-donation-lib'

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
