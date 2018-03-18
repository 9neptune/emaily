import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from './Header';
import {SurveyNew} from './surverys/SurveyNew'
// const Header = () => <h1>Header</h1> 
const dashboard = () => <h1>Dashboard</h1>
const survey = () => <h1>Survey</h1>

class App extends React.Component{
    componentdidmount(){

    }

    render(){
    return (
       
       <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component= {dashboard} />
                    <Route path="/dashboard" component= {dashboard} />
                    <Route exact path="/surveys" component= {survey} />
                    <Route exact path="/surveys/new" component= {SurveyNew} />

                    
                </div>
            </BrowserRouter>
        </div>
    );
}
}
export default App;