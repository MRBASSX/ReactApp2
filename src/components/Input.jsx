
import "../static/css/App.css"

function Input({type,names,id ,value,onChange,placeholder}) {


    return<>
    
    <div className="input-field">
        <input type={type} name={names} id={id} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
    
    
    
    </>
    
}


export default Input