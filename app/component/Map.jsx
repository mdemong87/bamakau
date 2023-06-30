import Container from "./Containner";

export default function Map() {
    return (
        <div className="py-8">
            <Container>
                <div className="h-full w-full">
                    <iframe className="border border-sky-600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896.1618923334875!2d28.21921476958347!3d-26.04508499857342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956b6f84bc4b65%3A0xce3c2afa3a35fe3c!2sBa%20Makau%20(Pty)%20Ltd!5e0!3m2!1sen!2sbd!4v1688117787008!5m2!1sen!2sbd" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </div>
    )
}
