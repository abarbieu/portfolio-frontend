import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { elastic as Sidebar } from 'react-burger-menu';
// import Header from './components/todolist/Header';
// import TodoList from './components/todolist/TodoList';
import LaunchMenu from './resources/launch-menu.json';
import TreeMenu from './components/tree_menu/TreeMenu';
// import Panels from './components/panels/Panels';
import MyAlert from './components/test/MyAlert';
import './App.css';

type MyState = {
  windowSize: { x: number; y: number };
};
type MyProps = {};

class App extends React.Component<MyProps, MyState> {
  // apiUrl: String;

  constructor (props: MyProps) {
    super(props);
    // if (process.env.NODE_ENV === 'development') {
    //   this.apiUrl = 'http://127.0.0.1:54321/api/';
    // } else {
    //   this.apiUrl = 'https://abarbieux.com/api/';
    // }
    this.state = {
      windowSize: { x: window.innerWidth / 2, y: window.innerHeight / 2 },
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  render () {
    return (
      <div className='Tiled-back'>
        <MyAlert />
        <div>
          <main>
            <Router>
              <Switch>
                <Route path='/notes/'>
                  <div>Note Page</div>
                </Route>
                <Route path='/'>
                  <TreeMenu
                    rootPos={{
                      x: this.state.windowSize.x / 2,
                      y: this.state.windowSize.y / 2,
                    }}
                    spawnRange={{ from: 0.5, to: 2.5 }}
                    menu={LaunchMenu}
                  />
                </Route>
              </Switch>
            </Router>
          </main>
        </div>
      </div>
    );
  }
  componentDidMount () {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions () {
    this.setState({
      windowSize: { x: window.innerWidth, y: window.innerHeight },
    });
  }
}

export default App;
