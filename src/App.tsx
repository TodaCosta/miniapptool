import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import { IUser } from './models/IUser';
import PostConteiner from './components/PostConteiner';
import PostConteiner2 from './components/PostConteiner2';


function App() {
  // //const {} = useAppSelector(state => state.userReducer.users)
  // //без хука при исп-ии useSelect пришлось бы явно указывать тип стейта const{}=useSelector((state:RootState)=>state.userReducer.users)
  
  // const dispatch = useAppDispatch()
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);
  // const {} = userSlice.actions; //-вытаскиваем экшнкриэйтор (slice содержит экшнкриэйторы и редьюсеры),
  // //ни экшены, ни криэйторы, ни типы для экшенов мы не создаем вручную-всё делает redux toolkit
  
  // useEffect(() => {
  //   dispatch(fetchUsers())
  // }, [])

  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <PostConteiner />
      <PostConteiner2 /> {/* запрос выполнится 1 раз в network */}
      </div>

      {/* {isLoading && <h1>Идёт загрузка</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)} */}
    </div>
  );
}

export default App;
