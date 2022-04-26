import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ContactList from "./components/ContactList/ContactList";
import Profile from "./components/Profile/Profile";
import ProfileForm from "./components/Profile/ProfileForm";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/contacts" element={<ContactList />} />
        <Route path="/contacts/add" element={<ProfileForm />} />
        <Route path="/contact/:id" element={<Profile />} />
        <Route path="/contact/:id/edit" element={<ProfileForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
