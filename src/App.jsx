import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'
import Usergreeting from './Usergreeting.jsx'
import Lists from './Lists.jsx'
import Mycomponent from './Mycomponent.jsx'
import Mycomponent1 from './Mycomponent1.jsx'
import Colorpiker from './Colorpiker.jsx'
import Listupdate from './Listupdate.jsx'
import Todolist from './Todolist.jsx'
import Digitalclock from './Digitalclock.jsx'



function App() {
    return(
      <>
        <Header/>
        <Digitalclock />
        <Card/>
        <Card/>
        <Button/>
        <Student name="Pankaj" age={39} isstudent={true} />
        <Student name="Pratik" age={30} isstudent={true} />
        <Usergreeting isLoggedin={false} username="Ramesh"/>
        <Lists/>
        <Mycomponent/>
        <Mycomponent1/>
        <Colorpiker />
        <Listupdate />
        <Todolist />
        
        <Footer/>
      </>
    );
}

export default App
