import "./discover-btn.css";



const DiscovBtn = ()=> {
  const handleClick = ()=> {
    alert('Start Discovering!');
  }
  return (
    <button onClick={handleClick} className="discov-btn">
      Discover AI at webflow <i class="fas fa-arrow-right"></i>
    </button>
  );
}

export default DiscovBtn;