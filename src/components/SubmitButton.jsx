import '../static/css/App.css'

function SubmitButton({value,color,bg,onChange}) {

    return(
        <>
      <div className="submit-button">
          <input type="submit" value={value} style={{color:color,background:bg}} onChange={onChange} />
      </div>
        </>
    )
    
}

export default SubmitButton