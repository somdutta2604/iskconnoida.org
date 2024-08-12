import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import EventsAndFestivals from "./pages/EventsAndFestivals";
import Facilities from "./pages/Facilities";
import Home from "./pages/Home";
import OurServices from "./pages/OurServices";
import RefundReturns from "./pages/RefundReturns";
import TermsAndConditions from "./pages/TermsAndConditions";
import EventInfo from "./pages/EventInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page={<Home />} />,
  },
  {
    path: "/about",
    element: <App page={<About />} />,
  },
  {
    path: "/events",
    element: <App page={<EventsAndFestivals />} />,
  },
  {
    path: "/events/:id",
    element: <App page={<EventInfo />} />,
  },
  {
    path: "/services",
    element: <App page={<OurServices />} />,
  },
  {
    path: "/facilities",
    element: <App page={<Facilities onHomePage={false} />} />,
  },
  {
    path: "/terms-conditions",
    element: <App page={<TermsAndConditions />} />,
  },
  {
    path: "/refund-returns-page",
    element: <App page={<RefundReturns />} />,
  },
]);

export default router;
