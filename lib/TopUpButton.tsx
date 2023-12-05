import axios from 'axios'
import Swal from 'sweetalert2'

interface Props {
    batchId: string
    style?: React.CSSProperties
}

export function TopUpButton({ batchId, style }: Props) {
    async function onPress() {
        const days = await Swal.fire<number>({
            title: 'Top Up',
            input: 'number',
            inputLabel: 'Days of hosting',
            inputPlaceholder: 'Enter the number of days you want to extend the hosting for',
            showCancelButton: true
        })
        if (days.value) {
            const amount = ((days.value * 24 * 60 * 60) / 5) * 24000
            if (
                (
                    await Swal.fire<boolean>({
                        title: 'Confirm',
                        text: `You are about to top up the stamp with amount ${amount}`,
                        icon: 'info',
                        showCancelButton: true
                    })
                ).value !== true
            ) {
                return
            }
            topUpBatch(batchId, days.value)
            Swal.fire({
                icon: 'success',
                text: 'Thank you for topping up the stamp. Your contribution will be visible in a few minutes.'
            })
        }
    }

    return (
        <button style={style} onClick={onPress}>
            Top Up
        </button>
    )
}

async function topUpBatch(batchId: string, days: number): Promise<void> {
    const amount = ((days * 24 * 60 * 60) / 5) * 24000
    await axios.patch(`http://localhost:1635/stamps/topup/${batchId}/${amount}`)
}
