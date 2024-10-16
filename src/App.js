import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react';
import News from './components/News';
// import News setProgress={this.setProgress}Item from './components/News setProgress={this.setProgress}Item';
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageSize= 5
  apiKey= process.env.REACT_APP_NEWS_API
   state = {
    progress: 0
   } 

  setProgress = (progress)=> {
  this.setState({progress: progress})
  }
  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <> 
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="general"/> 
        </>
      },
      {
      path: "/business",
      element: <>
      <NavBar/>  
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> 
      <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="business"/> 
      </>
  },
  { 
    path: "/entertainment",
    element: <>
    <NavBar/>  
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> 
      <News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="entertainment"/> 
    </>
},
{
    path: "/health",
    element: <>
    <NavBar/>  
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> 
      <News setProgress={this.setProgress} key="health" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="health"/> 
  </>
},
{
  path: "/science",
  element: <>
  <NavBar/>  
  <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> 
      <News setProgress={this.setProgress} key="science" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="science"/> 
  </>
},
{
  path: "/sports",
  element: <>
  <NavBar/>  
  <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> 
      <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="sports"/> 
  </>
},
{
  path: "/technology",
  element: <>
  <NavBar/>  
  <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      /> 
      <News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} apiKey={this.apiKey} country="us" category="technology"/> 
  </>
}

    ])
    return (
      <div>
        <RouterProvider router={router} />
      </div>
      
    )
  }
}
