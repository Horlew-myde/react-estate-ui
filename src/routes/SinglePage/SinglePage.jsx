import './SinglePage.scss';
import Slider from "../../components/slider/slider"

function SinglePage() {
    return (
        <div className='singlePage'>
            <div className='details'>
                <div className='wrapper'>
                    <Slider/>
                    <div className='info'>
                        <div className='top'></div>
                        <div className='bottom'></div>
                    </div>
                </div>
            </div>
            <div className='features'>
                <div className='wrapper'>Wrapper</div>
            </div>
        </div>
    );
}

export default SinglePage