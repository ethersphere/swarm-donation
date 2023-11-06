import Swal from 'sweetalert2'

interface Props {
    ethereumAddress: string
    style?: React.CSSProperties
}

export function DonateButton({ ethereumAddress, style }: Props) {
    const metamask = (window as any).ethereum

    function onPress() {
        if (!metamask) {
            Swal.fire({
                title: 'Metamask not found',
                text: 'Please install Metamask to donate',
                icon: 'error'
            })
            return
        }
        metamask.request({ method: 'eth_requestAccounts' }).then(async (accounts: any[]) => {
            const account = accounts[0]
            const params = {
                to: ethereumAddress,
                from: account,
                value: '0x38d7ea4c68000'
            }
            metamask
                .request({
                    method: 'eth_sendTransaction',
                    params: [params]
                })
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        text: 'Thank you for your donation.'
                    })
                })
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        text: 'Something went wrong. Please try again later.'
                    })
                })
        })
    }

    return (
        <button style={style} onClick={onPress}>
            Donate
        </button>
    )
}
