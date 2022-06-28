import React from 'react';
import Footer from './Footer';
import Heading from './Heading';
import Para from './Para';
import doveloperName, {info} from './ImportExport';

function App() {
    return ( <div><Heading /><Para /> <h1>{doveloperName}</h1>{info()}<Footer /></div>);
}

export default App;