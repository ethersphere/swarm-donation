import Swal from 'sweetalert2'

interface Props {
    ethereumAddress: string
    style?: React.CSSProperties
}

export function DonateButton({ ethereumAddress, style }: Props) {
    function onPress() {
        Swal.fire({
            title: 'Donate',
            text: 'The author is accepting donations on the address below. Use MetaMask or similar tools to send a generous tip.',
            input: 'text',
            inputValue: ethereumAddress,
            icon: 'info'
        })
    }

    return (
        <button style={style} onClick={onPress}>
            Donate
        </button>
    )
}
