import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import CardsList from './components/CardsList';
import Pagination from '@mui/material/Pagination';
import Counter from './components/Counter';
import PageSlider from './components/PageSlider';


class App extends Component{
  constructor(props){
    super(props);

    this.state={
      users:[],
      searchedValue: "",
      itemsPerPage:5,
      currentPage: 1
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({users:users}))
    
    // this.setState({itemsPerPage:this.state.users.length})
  }

  handleSearch = (e) =>{
    this.setState({
      searchedValue: e.target.value
    })
    // console.log(e.target.value);
  }

  handlePageChange = (event,newPage) =>{
    // console.log(event,newPage);
    this.setState({
      currentPage:newPage
    })
  }
  handleSliderChange = (event, newValue) =>{
    this.setState({
      itemsPerPage: newValue
    })
  }

  render(){
    // console.log(this.state.users);
  const {users,searchedValue,itemsPerPage,currentPage}=this.state;
  const filteredUsers = users.filter( (user)=> user.name.toLowerCase().includes(searchedValue.toLowerCase()) );
  const startIndex = (currentPage-1)*itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredUsers.slice(startIndex,endIndex);


  return (
    <div className="App">
    {/* {this.state.users.map(user=>
      <Cards user={user}/>
      )} */}
      <h1 style={{margin:"20px", textAlign:"center"}}>USERS</h1>
      <SearchBox searchedValue={searchedValue} handleSearch={this.handleSearch}/>
      <PageSlider itemsPerPage={itemsPerPage} handleSliderChange={this.handleSliderChange}/>
      {filteredUsers.length!=0 ? 
      <div>
      <CardsList filteredUsers={currentItems} /> 
      <Pagination 
        count={Math.ceil(filteredUsers.length/itemsPerPage)}
        page={currentPage}
        onChange={this.handlePageChange}
        />
        </div>
        : <h3 style={{margin: "20px"}}> No results found</h3>
        }
      
      <Counter/>
    </div>
  );
  }
}

export default App;
