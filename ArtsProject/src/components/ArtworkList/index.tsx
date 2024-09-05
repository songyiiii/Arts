import React, { useState } from 'react';
import { ArtworkListStyled } from './styled';
import { datas } from '../../utill/datas';
import ArtworkItem from '../ArtwrokItem';
import Category from '../Category';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css';

const ArtworkList = () => {
    const [selectCategory, setSelectCategory] = useState<string | null>(null);
    const [search, setSearch] = useState<string>('');
    const [sortOption, setSortOption] = useState<string>('latest'); // 정렬 상태
    const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
    const itemsPerPage = 9; // 페이지당 항목 수

    const filterData = datas
        .filter((data) => {
            // 카테고리 필터 적용
            if (selectCategory && data.category !== selectCategory)
                return false;
            // 검색어 필터 적용 (작가 이름 또는 제목에 검색어 포함)
            return (
                data.title.toLowerCase().includes(search.toLowerCase()) ||
                data.artist.name.toLowerCase().includes(search.toLowerCase())
            );
        })
        .sort((a, b) => {
            // 정렬 옵션에 따라 데이터 정렬
            if (sortOption === 'latest') {
                return b.release - a.release; // 최신순
            } else if (sortOption === 'priceAsc') {
                return a.price - b.price; // 가격 오름차순
            } else if (sortOption === 'priceDesc') {
                return b.price - a.price; // 가격 내림차순
            }
            return 0;
        });

    // 현재 페이지에 해당하는 항목만 추출
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

    // 총 페이지 수 계산
    const pageCount = Math.ceil(filterData.length / itemsPerPage);

    // 페이지 변경 함수
    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected); // 선택한 페이지로 이동
    };

    return (
        <div className={styles.wrap}>
            <Category onSelectCategory={setSelectCategory}></Category>
            <div className={styles.formBox}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Search by artist or title"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className={styles.select}
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="latest">최신순</option>
                    <option value="priceAsc">높은가격순</option>
                    <option value="priceDesc">낮은가격순</option>
                </select>
            </div>

            <ArtworkListStyled>
                {currentItems.map((x, i) => {
                    return (
                        <ArtworkItem
                            key={i}
                            title={x.title}
                            artist={x.artist.name}
                            price={x.price}
                            imgUrl={x.src.src}
                            id={x.id}
                        />
                    );
                })}
            </ArtworkListStyled>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount} // 총 페이지 수
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange} // 페이지 변경 함수
                containerClassName={styles.pagination}
                pageClassName={styles.pageItem}
                pageLinkClassName={styles.pageLink}
                previousClassName={styles.pageItem}
                nextClassName={styles.pageItem}
                previousLinkClassName={styles.pageLink}
                nextLinkClassName={styles.pageLink}
                activeClassName={styles.active}
                disabledClassName={styles.disabledPage}
            />
        </div>
    );
};
export default ArtworkList;
