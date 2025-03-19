
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  

  
  // return문 내부에 들어오는 값을 div 로 묶어줘야 함
  // div가 불필요하게 생기는게 싫다면 fragment를 사용
  // 다만 최신버전에서는 <> </> 로 대체 가능
  return (
    <>
      <Header/>
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
