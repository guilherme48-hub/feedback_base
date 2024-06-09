import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import{Home} from "./pages/Home"
import {theme} from "./styles/theme.js"

const router = createBrowserRouter ([
    {
        path: "/",
        Element: <Home />
    }
])


export  function App() {
  return (
   <ThemeProviderTheme={theme}>

    <RouterProvider router={router} />
   </ThemeProvider>
  )
}
