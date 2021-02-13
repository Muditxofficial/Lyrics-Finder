import React,{useState,useEffect} from 'react'
import axios from 'axios'
//Creates a Context object. When React renders a component that subscribes to this Context 
//object it will read the current context value from the closest matching Provider above it in the tree.
export const Context = React.createContext();


export function ContextController ({children}){
    let intialState = {
        track_list: [],
        heading: "Top 10 Tracks"
        // dispatch: action => this.setState(state => reducer(state, action))
      };
      const [state, setState] = useState(intialState);
      useEffect(() => {
        async function fetchdata(){
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=IN&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
            console.log(res.data)
            setState({track_list:res.data.message.body.track_list})
        }
        fetchdata()
      },[])

    return (
/* Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes. */
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}



