import { toast } from "sonner";

export default function Contact() {

    const handleClear = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const parent = target.closest('.contact-form');
        parent.querySelectorAll('input').forEach(input => {
            input.value = '';
        });
        parent.querySelector('textarea')!.value = '';
        toast.dismiss();
    }

    const handleSumbit = async (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const parent = target.closest('.contact-form');
        const DATA = parent.querySelectorAll('[placeholder]') as NodeListOf<HTMLInputElement>;
        if (DATA[0].value.length === 0 || DATA[1].value.length === 0 || DATA[2].value.length === 0) {
            toast.error('Please fill all fields');
            return;
        }

        const sendEmail = async () => {
            try {
                await fetch('https://app-xr5kdq6jkq-uc.a.run.app/Email/send', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: DATA[0].value,
                        topic: DATA[1].value,
                        message: DATA[2].value,
                    }),
                });
            } catch (e) {
                console.log(e)
            }
        }


        await toast.promise(sendEmail, {
            loading: 'Sending...',
            error: 'Error sending message',
        });


    }

    return (
        <div className="f-row g-2 f-justify-between px-4 py-3 f-wrap" style={{ borderTop: "solid 1px rgba(var(--lb-br), .5)" }}>
            <span className="btn btn-third br-6 fw-600 pointer text-center" style={{ padding: '.6rem 2.25rem', maxWidth: 216 }} onClick={handleClear}>
                Clear
            </span>
            <span className="btn btn-primary br-6 fw-700 pointer text-center" style={{ padding: '.6rem 2.25rem', maxWidth: 216 }} onClick={handleSumbit}>
                Send
            </span>
        </div>
    )
}