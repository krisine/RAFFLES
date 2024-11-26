import PhotographyLanding from './pages/photography-landing';
import UsesOfPortraits from './pages/uses-of-portraits';
import PortraitOfGordon from './pages/portrait-of-gordon';
import SessionOverview from './pages/session-overview';
import BookingInfo from './pages/booking-info';

export default function Home() {
  return (
    <>
      <PhotographyLanding />
      <UsesOfPortraits />
      <PortraitOfGordon />
      <SessionOverview />
      <BookingInfo />
    </>
  );
}
