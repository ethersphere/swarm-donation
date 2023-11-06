import { topUpBatch } from 'swarm-donation-lib'
import Swal from 'sweetalert2'

interface Props {
    batchId: string
    style?: React.CSSProperties
}

export function TopUpButton({ batchId, style }: Props) {
    async function onPress() {
        const amount = await Swal.fire<number>({
            title: 'Top Up',
            input: 'number',
            inputLabel: 'Amount (an ideal number is between 1 billion and 1 trillion)',
            showCancelButton: true
        })
        if (amount.value) {
            topUpBatch(batchId, amount.value.toString())
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
