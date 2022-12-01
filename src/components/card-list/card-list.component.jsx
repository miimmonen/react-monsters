
import './card-list.styles.css';
import Card from '../card/card.component';

const cardList = ({monsters}) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return(
                <Card key={monster.id} monster={monster} className='card-container' />
                )})}
        </div>
    )
    
}

export default cardList;