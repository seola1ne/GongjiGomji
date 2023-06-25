import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { firestore } from './firebase';
import Header from '../src/components/common/Header/Header';
import Main from '../src/Pages/Main/Main';
import Create from './Pages/Create/Create';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    console.log(firestore);
  })

  // create라는 변수로 firestore의 collection인 create에 접근
  const create = firestore.collection("create");

  // collection의 document인 "create_item"을 가져온다.
  create.doc("create_item").get().then((doc) => {
    // document의 데이터를 가져옴
    console.log(doc.data());

    // document의 id를 가져옴
    console.log(doc.id);
  })
  
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/create' element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
