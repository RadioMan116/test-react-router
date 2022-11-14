import {useEffect, useState} from "react";
import Article from "../../components/Article";

const News = () => {
    const [state, setState] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json => {
                json.length = 18
                setState(json)
                setIsLoad(true)
            })
    }, []);

    if(!isLoad) return <div className="loading">Loading...</div>

    return (
        <div className={'list'}>
            <h1>Blog Articles</h1>
            <div className={'list-inner'}>
                {state.map(el => <Article el={el} key={el.id}/>)}
            </div>
        </div>
    )
};

export default News;