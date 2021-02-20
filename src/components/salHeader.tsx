
import { useEffect } from 'react';

export default function MainHeaderComponent() {


    useEffect(() => {
        document.title = `Sal Holdings`;
    });

    function onImageClick(){
        window.open("/"); 
    }
    return (
        <div><table>
            <tr>
                <td onClick={onImageClick} className="sticky-t"><div className="App-slidein-div z-index-1">
                    <img src="https://salmansaeed.us/logos/salLogo.svg" className="App-logo" alt="logo" />
                </div>
                </td>
                <td><br/><br/>
                    <h1 className="App-dissolve-div display-1">Salman Saeed Holdings</h1>
                    <h2 className="App-dissolve-div display-4 color-gold float-right">An Art of Business</h2>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div className='App-dissolve-div'>
                        <h1>Salman Saeed Holdings Inc. </h1>
                    </div>
                </td>
                </tr>
            <tr>
            <td></td>
            
            <td>
            </td>
            </tr>

        </table>
                </div>


    );
}
//export default EmpFormComponent;
