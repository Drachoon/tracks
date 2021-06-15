import logo from './logo.svg';
import './css/reset.css';
import './App.css';
import Header from'./component/Header/Header';
import Body from './component/Body/Body';
import Footer from './component/Footer/Footer';

function App() {
    return (
        <div class="wrapper">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
