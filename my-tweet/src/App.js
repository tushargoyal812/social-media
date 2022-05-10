import "./App.css";
import {PhoneIcon,WarningIcon,ChevronRightIcon} from '@chakra-ui/icons'
import {
  Image,Box
} from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <Box boxSize='60rem'>
        <Image h='48rem' w='55rem' src='https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/logos/htc-summary-card.jpg.twimg.768.jpg' alt='Dan Abramov' />
      </Box>
    </div>
  );
}

export default App;
