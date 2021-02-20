export default function MainFooterComponent() {

    function logOutFunction(){
        window.location.reload(); 
      
    }
    

    return (
        
        <div>
        <button className="btn-color-gold App-dissolve-div sticky-b" onClick={logOutFunction}>Refresh</button>
            </div>

    );
}