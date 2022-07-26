import { useState } from 'react';

function Forms1() {
    const [name, setName] = useState('');

    return (
        <form>
        <label>
          <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
           />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

export default Forms1;