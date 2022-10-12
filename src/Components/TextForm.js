import React,{useState} from 'react'
export default function TextForm(props) {
    const [text, setText] = useState('');
    const disabled=true;
    const handleUpClick=()=>{
        //console.log("Button was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("The text was converted to upper case","success")
    }
    const handleClearClick=()=>{
        setText(" ");
        props.showAlert("The text was cleared","success")

    }
    const handleLowerUpperCase=()=>{
        let newText1=text.toLowerCase();
        setText(newText1)
        props.showAlert("The text was converted to lower case","success")
    }
    const copyText=()=>{
       // var text=document.getElementById("myBox")
        //text.select();
       // text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text);
       // document.getSelection.removeAllRanges();
        props.showAlert("The text was copied to clipboard","success")

    }
    const removeSpace=()=>{
        var text=document.getElementById("myBox").replace(/\s+/g, ' ').trim()

    }
    const onChange=(event) =>{
        console.log("Text area value was changed")
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className='my-3 '>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" rows="3" onChange={onChange} value={text}
  style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#13466e'}}></textarea>
</div>
<button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleClearClick}>Clear text</button>
<button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={handleLowerUpperCase}>Convert to lower case</button>
<button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={copyText}>Copy Text</button>
<button className='btn btn-primary mx-2 my-2' disabled={text.length===0} onClick={removeSpace}>Remove space</button>

    </div>
    <div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary here</h1>
        <p>
            {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words <br>
            </br>
            {text.length} characters 
        </p>
        <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} Time taken to read the text </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text above to see the preview"}</p>
    </div>
    </>
  )
}
