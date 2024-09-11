import { Image, Modal } from 'antd';
import React, { useState } from 'react';
import { ArtworkDetailTopStyled } from './styled';

interface artworkProps {
    artwork: {
        artist: { name: string; info?: string; company?: string };
        category: string;
        frame: string;
        id: number;
        materials: string;
        price: number;
        rarity: string;
        size: string;
        src: { src: string };
        title: string;
    };
}

const ArtworkDetailTop = ({ artwork }: artworkProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <ArtworkDetailTopStyled>
            <div className="imgBox">
                <Image.PreviewGroup
                    preview={{
                        zIndex: 10000000000, // header보다 높은 z-index 설정
                    }}
                >
                    <Image src={artwork.src.src} alt={artwork.title} className='img'/>
                </Image.PreviewGroup>
            </div>
            <div className="buyBox">
                <div className="textBox">
                    <p>{artwork.artist.name}</p>
                    <p>{artwork.title}</p>
                    <p>{artwork.artist.company}</p>
                    <p>{artwork.materials}</p>
                    <p>{artwork.size}</p>
                    <p>{artwork.price.toLocaleString()}</p>
                </div>
                <div className="btnBox">
                    <button type="button" onClick={showModal}>
                        구매하기
                    </button>
                    <button type="button" onClick={showModal}>
                        장바구니
                    </button>
                </div>
                <Modal
                    title="Basic Modal"
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    style={{ zIndex: 1050 }}
                >
                    <p>준비중입니다</p>
                </Modal>
            </div>
        </ArtworkDetailTopStyled>
    );
};
export default ArtworkDetailTop;
