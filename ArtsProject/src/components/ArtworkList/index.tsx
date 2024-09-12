import React, { useState } from 'react';
import { ArtworkListStyled } from './styled';
import { datas } from '../../utill/datas';
import ArtworkItem from '../ArtwrokItem';
import Category from '../Category';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from 'antd';
import { useFormik } from 'formik';

const ArtworkList = () => {
    //카테고리 저장
    const [selectCategory, setSelectCategory] = useState<string>('all');
    //검색어 상태
    const [search, setSearch] = useState<string>('');
    //현재 페이지 상태 저장(첫번째페이지로 설정)
    const [currentPage, setCurrentPage] = useState<number>(0);
    //한페이지에 몇개보여줄건지
    const itemsPerPage = 9;

    const formik = useFormik({
        initialValues: {
            search: '',
            sortOption: 'latest',
        },
        onSubmit: (values) => {
            setSearch(values.search);
            setCurrentPage(0);
        },
    });

    const filterData = datas
        .filter((data) => {
            if (
                selectCategory &&
                selectCategory !== 'all' &&
                data.category !== selectCategory
            ) {
                return false;
            }
            return (
                data.title.toLowerCase().includes(search.toLowerCase()) ||
                data.artist.name.toLowerCase().includes(search.toLowerCase())
            );
        })
        .sort((a, b) =>
            formik.values.sortOption === 'latest'
                ? b.release - a.release
                : formik.values.sortOption === 'priceAsc'
                ? a.price - b.price
                : formik.values.sortOption === 'priceDesc'
                ? b.price - a.price
                : 0
        );

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filterData.slice(indexOfFirstItem, indexOfLastItem);

    // 총 페이지 수 계산
    const pageCount = Math.ceil(filterData.length / itemsPerPage);

    // 페이지 변경 함수
    const handlePageChange = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected); // 선택한 페이지로 이동
    };

    function handleKeyPress(
        event: React.KeyboardEvent<HTMLInputElement>
    ): void {
        if (event.key === 'Enter') {
            formik.handleSubmit(); // 엔터키를 누르면 폼 제출
        }
    }

    return (
        <div className={styles.wrap}>
            <Category onSelectCategory={setSelectCategory}></Category>
            <form onSubmit={formik.handleSubmit} className={styles.formBox}>
                <Input
                    name="search"
                    className={styles.input}
                    placeholder="Search by artist or title"
                    value={formik.values.search}
                    onChange={formik.handleChange}
                    onKeyDown={handleKeyPress}
                />
                <Tooltip title="search" className={styles.button}>
                    <Button
                        htmlType="submit"
                        shape="circle"
                        icon={<SearchOutlined />}
                    />
                </Tooltip>
                <select
                    name="sortOption"
                    value={formik.values.sortOption}
                    onChange={formik.handleChange}
                    className={styles.select}
                >
                    <option value="latest">최신순</option>
                    <option value="priceAsc">낮은가격순</option>
                    <option value="priceDesc">높은가격순</option>
                </select>
            </form>

            <ArtworkListStyled>
                {currentItems.length > 0 ? (
                    currentItems.map((x, i) => (
                        <ArtworkItem
                            key={x.id}
                            title={x.title}
                            artist={x.artist.name}
                            price={x.price}
                            imgUrl={x.src.src}
                            id={x.id}
                        />
                    ))
                ) : (
                    <p className="Instructions">상품이 존재하지 않습니다.</p>
                )}
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
