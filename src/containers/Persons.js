import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionTypes from '../store/actions/index';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    // state = {
    //     persons: []
    // }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'RickyC',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    //     console.log('[personId]', newPerson.id);
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    //     console.log('[deletePersonId]', personId);
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPersonHandler} />
                {this.props.personsArray.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.deletePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    personsArray: state.persons
})

const mapDispatchToProps = dispatch => ({
    addPersonHandler: () => dispatch({type: actionTypes.ADD_PERSON}),
    deletePersonHandler: (id) => dispatch({type: actionTypes.DELETE_PERSON, personId: id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(Persons);