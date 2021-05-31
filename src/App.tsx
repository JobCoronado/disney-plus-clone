import LandingPage from './pages/LandingPage';
import { Fonts } from './styles/fonts';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
function App() {
  return (
    <Fonts>
      <LandingPage />
    </Fonts>

  );
}

export default App;
