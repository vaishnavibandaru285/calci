import React,{useState} from 'react'

function Calci() {
    const[input,setInput]=useState()
    const nums=[1,2,3,'+']
    const nums1=[4,5,6,'-']
    const nums2=[7,8,9,'*']
    const nums3=[0,'.','/']

    function gatherInput(n){
        const inp=String(`${input}${n}`)
        setInput(inp)
    }
    function calR(){
        const res=eval(input)
        setInput(res)
    }
    function cl(){
        const res=input.slice(0,-1)
        setInput(res)
    }
    

return(
    <div>
        <div>
            <h1>Calculator</h1>
        </div>
        <div>
            <input type="text" value={input} onChange={e=>{setInput(e.target.value)}}/>
        </div>
        <div>
            {
                nums.map((n)=>{
                    return(
                        <button key={n} onClick={()=>gatherInput(n)}>{n}</button>
                    )
                })
            }<br/>
            {
                nums1.map((n)=>{
                    return(
                        <button key={n} onClick={()=>gatherInput(n)}>{n}</button>
                    )
                })
            }<br/>
            {
                nums2.map((n)=>{
                    return(
                        <button key={n} onClick={()=>gatherInput(n)}>{n}</button>
                    )
                })
            }<br/>
            {
                nums3.map((n)=>{
                    return(
                        <button key={n} onClick={()=>gatherInput(n)}>{n}</button>
                    )
                })
            }
        </div>
    
    <button onClick={calR}>=</button>
    <button onClick={cl}>X</button>
    <button onClick={()=>setInput("")}>Clear</button>
    </div>
)
}
export default Calci