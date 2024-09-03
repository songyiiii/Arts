import { CategoryListStyled } from './styled';
interface CategoryData {
    category:string
    onClick: any;
}
const CategoryList = ({ category, onClick }: CategoryData) => {
    // console.log(category, '카테고리확인!!');
    return (
        <CategoryListStyled onClick={onClick}>
            <p>{category}</p>
        </CategoryListStyled>
    );
};
export default CategoryList;
