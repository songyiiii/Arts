import CategoryList from '../CategoryList';
import { CategoryStyled } from './styled';

interface CategoryProps {
    onSelectCategory: (category: string) => void;
}

const Category = ({ onSelectCategory }: CategoryProps) => {

    const category = ['painting', 'photography', '20th-Century Art'];
    return <CategoryStyled>
        {category.map((x,i) => {
            return <CategoryList category={x} key={i} onClick={() => onSelectCategory(x)}></CategoryList>
        })}
    </CategoryStyled>;
};
export default Category;
