import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";


const Favorites = () => {
    const favorites = useSelector(state => state.myFavorites);
    const dispatch = useDispatch();

    return(
    <>
    <div>
       <select name="order" onClick={(e)=>{dispatch(orderCards(e.target.value));}}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" onClick={(e)=>{dispatch(filterCards(e.target.value));}}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknow">unknow</option>
            </select> 
    </div>
    
        {favorites.map(({id, name, species, gender, image})=>{
            return( <Card
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            />
            );
        })}

    </>
    );
};

export default Favorites;