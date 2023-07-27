import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '/components/Header';
import Search from './componenets/Search';

const App = () => {
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search />
    </div>
  );
}

export default App;
