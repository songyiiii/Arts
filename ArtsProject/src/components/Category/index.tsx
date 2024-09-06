import CategoryList from '../CategoryList';
import { CategoryStyled } from './styled';
import {category} from '../../utill/datas'

interface CategoryProps {
    onSelectCategory: (category: string) => void;
}

const Category = ({ onSelectCategory }: CategoryProps) => {

    return <CategoryStyled>
        {category.map((x,i) => {
            return <CategoryList category={x} key={i} onClick={() => onSelectCategory(x)}></CategoryList>
        })}
    </CategoryStyled>;
};
export default Category;
