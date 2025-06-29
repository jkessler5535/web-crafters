import "./build.css";


const BuildBtn = ()=> {
  const handleClick = ()=> {
    alert('Start Building!');
  }
  return (
    <button onClick={handleClick} className="build-btn">
      Start building
    </button>
  );
}

export default BuildBtn;