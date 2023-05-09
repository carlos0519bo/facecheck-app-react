import '../styles/presentation-page.css';
import LOGO from '../assets/diego.png';

export const PresentationPage = () => {
  return (
    <div className="container">
      <button className="btn-access">Ingresar</button>

        <img src={LOGO} alt=""  width='100px' className='logo'/>
        <p className='title'>facecheck</p>
    </div>
  );
};
