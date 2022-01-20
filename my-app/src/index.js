import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

//========================== element ==========================//
// function tick() {
//   const element = (
//     <div>
//       <h1>
//         Hello!
//       </h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(element, document.getElementById('root'))
// }

// setInterval(tick, 1000)

//========================== component & props ==========================//
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello I'm {this.props.name}</h1>
//   }
// }

// function AllName() {
//   return (
//     <div>
//       <Welcome name="Jim"></Welcome>
//       <Welcome name="Julia"></Welcome>
//       <Welcome name="Coco"></Welcome>
//     </div>
//   )
// }


// ReactDOM.render(
//   <AllName />,
//   document.querySelector('#root')
// )

//========================== pull away component ==========================//
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img
//       className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );

//========================== state ==========================//

// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() }
//     }

//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.timerID)
//     }

//     tick() {
//         this.setState({
//             date: new Date()
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Hello!</h1>
//                 <FormatData date={this.state.date}></FormatData>
//             </div>
//         )
//     }
// }
// function FormatData(props) {
//     return (
//         <h2>It's {props.date.toLocaleTimeString()}</h2>
//     )
// }
// ReactDOM.render(
//     <Clock></Clock>,
//     document.querySelector('#root')
// )

//========================== event ==========================//
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isToggleOn: true }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() {
//         this.setState(preState => ({
//             isToggleOn: !preState.isToggleOn
//         }))
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>
//                     {(this.state.isToggleOn) ? 'On' : 'Off'}
//                 </button>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
// );

//========================== 條件render ==========================//
// function UserGreeting(props) {
//     return (
//         <h1>Hi Jim</h1>
//     )
// }
// function GuestGreeting(props) {
//     return (
//         <h1>Hi Stranger</h1>
//     )
// }
// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isLogIn: props.isLogIn }
//         this.handleClick = this.handleClick.bind(this)
//     }
//     handleClick() {
//         this.setState(prevState => ({
//             isLogIn: !prevState.isLogIn
//         }))
//     }
//     render() {
//         return (
//             <div>
//                 {<button onClick={this.handleClick}>{(this.state.isLogIn) ? 'Logout' : 'Login'}</button>},
//                 {(this.state.isLogIn) ? <UserGreeting /> : <GuestGreeting />}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Greeting isLogIn={false} />,
//     document.querySelector('#root')
// )

// function LogInButton(props) {
//     return <button onClick={props.onClick}>Log in</button>
// }
// function LogOutButton(props) {
//     return <button onClick={props.onClick}>Log Out</button>
// }
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this)
//         this.handleLogoutClick = this.handleLogoutClick.bind(this)
//         this.state = { isLogin: false };
//     }

//     handleLoginClick() {
//         this.setState({ isLogin: true });
//     }

//     handleLogoutClick() {
//         this.setState({ isLogin: false });
//     }

//     render() {
//         const isLogIn = this.state.isLogin
//         let button
//         if (isLogIn) {
//             button = <LogOutButton onClick={this.handleLogoutClick}></LogOutButton>
//         } else {
//             button = <LogInButton onClick={this.handleLoginClick}></LogInButton>
//         }


//         return (
//             <div>
//                 <h1>{(isLogIn) ? 'Welcome back' : 'Please Log in'}</h1>
//                 {button}
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );
//-------------------------------------------------------------------------------

// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages} />,
//     document.getElementById('root')
// );
// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }

//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }

// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { showWarning: true };
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }

//     handleToggleClick() {
//         this.setState(state => ({
//             showWarning: !state.showWarning
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// );

//========================== 列表與key ==========================//
// function ListItem(props) {
//     // 正確！你不需要在這裡指出 key：
//     return <li>{props.value}</li>;
// }

// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // 正確！Key 應該在 array 內被指定。
//         <ListItem key={number.toString()} value={number} />
//     );
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
// );
//-------------------------------------------------------------------------------

// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );
// }
// const posts = [
//     { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
//     { id: 2, title: 'Installation', content: 'You can install React from npm.' }
// ];
// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('root')
// );

//========================== Controlled Component ==========================//
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' };

//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleChange(event) {
//         this.setState({ value: event.target.value })
//     }
//     handleSubmit(event) {
//         alert(this.state.value)
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit"></input>
//             </form>
//         )
//     }
// }
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('root')
// );

// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: 'coconut' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({
//             value: event.target.value
//         })
//     }
//     handleSubmit(event) {
//         alert(this.state.value);
//         event.preventDefault();
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Pick your favorite:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">grapefruit</option>
//                         <option value="lime">lime</option>
//                         <option value="coconut">coconut</option>
//                         <option value="mango">mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         )
//     }
// }
// ReactDOM.render(
//     <FlavorForm />,
//     document.querySelector('#root')

// )

// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         }
//         this.handleInput = this.handleInput.bind(this);
//     }
//     handleInput(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             //Computed property names 
//             [name]: value
//         })
//     }
//     render() {
//         return (
//             <form>
//                 <label>
//                     Is going:
//                     <input
//                         name='isGoing'
//                         type='checkbox'
//                         checked={this.state.isGoing}
//                         onChange={this.handleInput}>
//                     </input>
//                 </label>
//                 <br />
//                 <label>
//                     Number of guests:
//                     <input
//                         name='numberOfGuests'
//                         type='number'
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInput}>
//                     </input>
//                 </label>
//             </form>
//         )
//     }
// }

// ReactDOM.render(
//     <Reservation />,
//     document.querySelector('#root')

// )

//========================== 提升state ==========================//
// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// }

// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }

// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }

// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(e) {
//     this.props.onTemperatureChange(e.target.value)
//   }
//   render() {
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;

//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//           onChange={this.handleChange} />
//       </fieldset>
//     )
//   }
// }

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
//     this.state = { temperature: '', scale: 'c' }
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({ scale: 'c', temperature })
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({ scale: 'f', temperature })
//   }

//   render() {
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

//     return (
//       <div>
//         <TemperatureInput
//           scale='c'
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale='f'
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.querySelector('#root')
// )

//========================== Composition vs 繼承 ==========================//
// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//       <p className="Dialog-message">
//         Thank you
//       </p>
//     </FancyBorder>
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog />,
//   document.querySelector('#root')
// )

//========================== Hook ==========================//
function Example() {
  // 我們宣告了一個叫做 count 的 state 變數，並將起始值設成了 0。
  // React 在 re-render 間會記住目前的值，並將它提供給我們的 function。
  // 如果我們需要更新目前的 count，我們可以呼叫 setCount。
  const [count, setCount] = useState(0);
  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        // setCount(count + 1);
        // setCount(count + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
      }
      }>
        Click me
      </button>
    </div>
  );
}
ReactDOM.render(
  <Example />,
  document.querySelector('#root')
)
