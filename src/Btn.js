// function Btn(){
//     const clickHandler= ()=>console.log("clicked");
//     return (
//         <button  onClick={clickHandler}>
//             click me
//         </button>
//     );
// }


// export default Btn;
function Btn(){
    const clickHandler= ()=>console.log("clicked");
    return (
        <button  onMouseOver={clickHandler}>
            click me
        </button>
    );
}


export default Btn;