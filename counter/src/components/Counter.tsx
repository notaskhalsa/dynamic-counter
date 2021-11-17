import './Counter.css'
import "bootstrap/dist/css/bootstrap.css";


export default function Counter(props:any): JSX.Element {
  const {counterData, onDelete, onIncrement, onDecrement} = props

  let btnClass = "btn btn-lg m-2 btn-";
  btnClass+= counterData.value === 0 ? "warning" : "primary";

  function formatCount(): number | JSX.Element{
    if(counterData.value === 0){
      return (<span>Zero</span>);
    }
    else{
      return counterData.value;
    }
  }
  return (
    <div className="flex-container">
      <span className={btnClass}>{formatCount()}</span>
      <span className="btns">
        <button className="btn btn-secondary btn-lg m-2" onClick={() => onIncrement(counterData)}>
          +
        </button>

        <button className="btn btn-secondary btn-lg m-2" onClick={() => onDecrement(counterData)}>
          -
        </button>

        <button className="btn btn-danger btn-lg" onClick={() => onDelete(counterData.id)}>
          delete
        </button>
      </span>
    </div>
  );
}
