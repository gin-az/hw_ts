import React from 'react';
import {LayoutMain} from "./layouts/LayoutMain";
// import {useActions} from "../hooks/useAction";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b0bec5',
      main: '#78909c',
      dark: '#546e7a'
    },
    secondary: {
      light: '#80cbc4',
      main: '#b0bec5',
      dark: '#4db6ac',
    },
  },
});

function App() {
  // const {app__initApp} = useActions();
  // useEffect(()=>{
  //     // app__initApp()    //Выполняется санка при инициализации приложения (хук useEffect)
  // })
  return (


      <ThemeProvider theme={theme}>
    <LayoutMain/>
      </ThemeProvider>

  );
}

export default App;
