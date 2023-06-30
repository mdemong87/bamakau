import About from "./component/About";
import ContactwithSendMessege from "./component/ContactwithSendMessege";
import Hero from "./component/Hero";
import Map from "./component/Map";
import MoreSupport from "./component/MoreSupport";
import Servises from "./component/Servises";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Servises />
      <MoreSupport />
      <ContactwithSendMessege />
      <Map />
    </main>
  )
}
