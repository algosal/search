import { useState } from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'


export default function SearchBar() {

    var [searchValue,setSearchValue] = useState('');
    var [switched,setSwitched] = useState(true);

function searchValueFn(e:any){
    setSearchValue(e.target.value); 
}

function handleKeypress(ev:any){
  if (ev.key == 'Enter') {
    alert("Default Google Searching for " + searchValue); 
    window.open("https://www.google.com/search?q=" + searchValue);
    switchButton(); 
  }
};

function switchButton(){
    if(!switched){
        setSearchValue(''); 
    }
}

function handleClickGoogle(){
    window.open("https://www.google.com/search?q=" + searchValue);
    switchButton(); 
};
function handleClickYouTube(){
    window.open("https://www.youtube.com/results?search_query=" + searchValue);
    switchButton(); 
};
function handleClickBing(){
    window.open("https://www.bing.com/search?q=" + searchValue);
    switchButton(); 
};
function handleClickYouglish(){
    window.open("https://youglish.com/pronounce/" + searchValue + "/english?");
    switchButton(); 
};
function handleClickDictionary(){
    window.open("https://www.dictionary.com/browse/" + searchValue);
    switchButton(); 
};

    return (


              <div className="form-group has-search">
                  <br></br> <br></br> <br></br>
                 <div className="sticky-s App-dissolve-div">  
                  <BootstrapSwitchButton  checked={switched}  width={200} height={30}   onlabel='Save Search'    offlabel='Off'  onChange={() => {(switched)?setSwitched(false):setSwitched(true)}} offstyle="outline-danger" onstyle="outline-warning"/>
                  </div>
                  <br></br>   <br></br>   
    <span className="fa fa-search form-control-feedback"></span>
    
    <label className="div-max-width">.
        <input id = "search" type="text" className="form-control" placeholder="Search" value = {searchValue} onChange={e=>{searchValueFn(e)}}  onKeyPress={e=>{handleKeypress(e)}}/>
    </label>
    <br></br>
    <button className="btn-color-gold App-dissolve-div center"  onClick={handleClickGoogle}>Google</button>&emsp; 
    <button className="btn-color-gold App-dissolve-div center"  onClick={handleClickYouTube}>YouTube</button>&emsp; 
    <button className="btn-color-gold App-dissolve-div center"  onClick={handleClickBing}>Bing</button>&emsp; 
    <button className="btn-color-gold App-dissolve-div center"  onClick={handleClickYouglish}>Youglish</button>&emsp; 
    <button className="btn-color-gold App-dissolve-div center"  onClick={handleClickDictionary}>Dictionary</button>&emsp;   
       </div>  
    );
}