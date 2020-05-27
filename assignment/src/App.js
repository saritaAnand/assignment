import React from 'react';
import MemberTable from './Component/Members/MembersTable';

function App(props){  
    return (
      <React.Fragment>
        <header style={{textAlign:"center"}}>
            <h1>Frontend Assignment - FullThrottle Labs</h1>
        </header>
        <MemberTable/>
      </React.Fragment>
    );
}

export default App;
