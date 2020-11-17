import React,{Component} from 'react';
import Person from './Person/Person';
class Persons extends Component
{
    static getDerivedstateFromProps(props,state){
        console.log('[Personsjs] getDerivedstateFromProps')
        return state;
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons!==this.props.persons ||
            nextProps.clicked!==this.props.clicked ||
            nextProps.changed!==this.props.changed
            ){
        return true;}
        else{
            return false;
        }
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message:"snaphot"};

        
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons js]  componentDidUpdate');
        console.log(snapshot);
    }
    componentWillUnmount(){
        console.log('[Persons.js] componentwillunmount');
    }

    render()
    {
    console.log('[Persons.js] render');
    return(this.props.persons.map((person,index)=>{
        return <Person key={person.id} 
                changed={(event)=>this.props.changed(event,person.id)} 
                name={person.name} 
                age={person.age} 
                click={()=>this.props.clicked(index)}
                />
      }
    )
    )
    }
      
};
export default Persons;