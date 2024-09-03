import { ArtworkDetailTopStyled } from './styled';

interface artworkProps {
    artwork:{
        artist:{name:string, info:string}
        category:string
        frame:string
        id:number
        materials:string
        price:number
        rarity:string
        size:string
        src:{src:string}
        title:string
    }
}

const ArtworkDetailTop = ({artwork}:artworkProps) => {
    
    return (
        <ArtworkDetailTopStyled>
            <div className="imgBox">
                <img src={artwork.src.src}></img>
            </div>
            <div className="buyBox">
                <div className='textBox'>
                    <p>{artwork.artist.name}</p>
                    <p>{artwork.title}</p>
                    <p>{artwork.materials}</p>
                    <p>{artwork.size}</p>
                    <p>{artwork.frame}</p>
                    <p>{artwork.price.toLocaleString()}</p>
                </div>
                <div className='btnBox'>
                    <button type='button'>구매하기</button>
                    <button type='button'>장바구니</button>
                </div>

            </div>
        </ArtworkDetailTopStyled>
    );
};
export default ArtworkDetailTop;
