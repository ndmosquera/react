import './Loader.css'
import { PacmanLoader } from 'react-spinners';


const Loader = () => {
  return (
    <div className="loader-container">
      <PacmanLoader
      color={"#d7de29"}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
      />
    </div>

  );
};

export default Loader;
