import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "@/views/Home"
import Error from "@/views/Error"
import AllCategories from "@/views/AllCategories"
import Location from "@/views/Location"
import Calendar from "@/views/Calendar"
import DoctorProfile from "@/views/DoctorProfile"
import InfoSpecialty from "@/views/InfoSpecialty"
import AllDoctors from "@/views/AllDoctors"
import Register from "@/views/Register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/doctor/:name",
    element: <DoctorProfile />,
  },
  {
    path: "/all-doctors",
    element: <AllDoctors />
  },
  {
    path: "/all-categories",
    element: <AllCategories />,
    children: [
      {
        path: "dentistry",
        element: <InfoSpecialty />,
      },
      {
        path: "cardiology",
        element: <InfoSpecialty />,
      },
      {
        path: "pulmonology",
        element: <InfoSpecialty />,
      },
      {
        path: "general",
        element: <InfoSpecialty />,
      },
      {
        path: "neurology",
        element: <InfoSpecialty />,
      },
      {
        path: "gastroenterology",
        element: <InfoSpecialty />,
      },
      {
        path: "laboratory",
        element: <InfoSpecialty />,
      },
      {
        path: "vaccination",
        element: <InfoSpecialty />,
      },
    ],
  },
  {
    path: "/location",
    element: <Location />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/profile",
    element: < Register/>,
  },
])

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes
