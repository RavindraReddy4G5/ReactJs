import React, {useState} from 'react';
import { useHistory } from "react-router";

function ImgDownLoader() {
    let history=useHistory();
    const [imgName,setImageName]=useState('');
    return (
         <div className="bgimage">
            <div>
                <h3 className="HeaderName">ImageDownloader</h3>
                <div className="verify">
                    <button className="btn btn-primary"> Login</button> &nbsp;
                    <button className="btn btn-secondary">SignUp</button> &nbsp;
                </div>
                <div className="text-center">
                    <h2>EASY WAY TO DOWNLOAD THE IMAGES AND MAKE DAY BEAUTIFUL</h2>
                    <h3>NOT ONLY FOR BEAUTY DOWNLOAD WITH FREE </h3>
                    <input type="text"
                    onChange={(e)=>setImageName(e.target.value)}
                    size="100" /><br /> <br />
                    <button className="btn btn-success" onClick={()=> imgName && history.push(`/Search/${imgName}`)}>Search</button>
                </div>
            </div>
    </div> 
    );
}
 

export default ImgDownLoader
