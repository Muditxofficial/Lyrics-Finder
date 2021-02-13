import React, { useContext } from 'react'
import Spinner from '../layout/Spinner'
import {Context} from '../../Context'
import Track from '../tracks/Track'
//Accepts a context object (the value returned from React.createContext) and returns the current context value for that context.
const Tracks = () => {
    const [state] = useContext(Context)
    const { track_list, heading } = state;
    console.log(heading)
    if (track_list === undefined || track_list.length === 0) {
      return <Spinner/>;
    } else {
      return (
        <>
          <div className="row">
            {track_list.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </>
      );
    }
}

export default Tracks
