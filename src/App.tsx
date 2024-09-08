import { Route, Routes } from "react-router-dom"

import DashboardComponent from "./features/dashboard/Index"
import CountryComponent from "./features/country/Index"
import GenreComponent from "./features/genre/Index"
import CinemaComponent from "./features/cinema/Index"
import MovieComponent from "./features/movie/Index"
import ShowtimeComponent from "./features/showtime/Index"
import BookingComponent from "./features/booking/Index"
import StatisticComponent from "./features/statistic/Index"
import UserComponent from "./features/user/Index"
import CustomerComponent from "./features/customer/Index"
import LayoutComponent from "./features/layout/Index"


function App() {
  return (
    <LayoutComponent>
      <Routes>
        <Route path="/" element={<DashboardComponent />} />
        <Route path="/country" element={<CountryComponent />} />
        <Route path="/genre" element={<GenreComponent />} />
        <Route path="/cinema" element={<CinemaComponent />} />
        <Route path="/movie" element={<MovieComponent />} />
        <Route path="/showtime" element={<ShowtimeComponent />} />
        <Route path="/booking" element={<BookingComponent />} />
        <Route path="/statistic" element={<StatisticComponent />} />
        <Route path="/user" element={<UserComponent />} />
        <Route path="/customer" element={<CustomerComponent />} />
      </Routes>
    </LayoutComponent>

  )
}

export default App
