import React ,{useEffect,useState} from "react";
import axios from "axios";
export const Search = ({match}) => {
    const [data,setData]=useState([]);
   useEffect(()=>{
       axios.get(`https://pixabay.com/api/?key=24150133-de3473f10021ebfb940c4c390&q=${match.params.imgName}&image_type=photo`).then(
           res=>setData(res.data.hits)
       )
   },[])
    return ( 
        <div className="search">
         <div className="row">
        {data && data.map(imgObj=>
            <div className="card">
                <img className="card-img-top" src={imgObj.largeImageURL} height="500" width="100" />
                <div className="card-body">
                    <h5 className="card-title">{imgObj.tags}</h5>
                    </div>
                </div>
            )}
         </div>
        </div>
     );
}
 
