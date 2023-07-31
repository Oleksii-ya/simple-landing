import Header from "./components/Header/Header";
import Banner from "./components/Banner";
import Title from "./components/Title";
import Content from "./components/Content";
import Footer from "./components/Footer/Footer";

import { CssBaseline, Container } from "@mui/material"
import theme from "./styles/index"
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return <>
    <CssBaseline />
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <Header />
        <Banner />
        <Title padding={"32px"} />
        <Content />
        <Footer />
      </ThemeProvider>
    </Container>
  </>
}

export default App;
