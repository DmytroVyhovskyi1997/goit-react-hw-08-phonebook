import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { LoginForm } from './LoginForm/LoginForm';
import { RegistredForm } from './RegistredForm/RegistredForm';

const App = () => {
  return (
    <div

    >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<LoginForm/>}>

          </Route>
          <Route path='register'element={<RegistredForm/>}></Route>
        </Route>
      </Routes>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </div>
  );
};
export default App;
