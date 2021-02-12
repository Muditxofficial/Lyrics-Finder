import React,{useState} from 'react'

const Context = React.createContext();


export const Provider = () => {
    const [trackList,setTrackList] = useState({
        track_list :[{
        track:{track_name:'abc'}
    },{
        track_name:"123"
    }],
    heading:"Top 10 Tracks"
})

    return (
        <Context.Provider value={trackList}>
            {this.props.children}
        </Context.Provider>
    )
}

export const Consumer = Context.Consumer;


