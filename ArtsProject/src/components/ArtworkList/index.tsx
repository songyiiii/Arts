import React, { useState } from 'react';
import { ArtworkListStyled } from './styled';
import { datas } from '../../utill/datas';
import ArtworkItem from '../ArtwrokItem';
import Category from '../Category';
import ReactPaginate from 'react-paginate';
import styles from './styles.module.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip, Input } from 'antd';
import { useFormik } from 'formik';

const ArtworkList = () => {
    //카테고리 저장
    const [selectCategory, setSelectCategory] = useState<string | null>(null);
    //검색어 상태
    const [submittedSearch, setSubmittedSearch] = useState<string>('');
    //현재 페이지 상태 저장
    const [currentPage, setCurrentPage] = useState<number>(0);
    //한페이지에 몇개보여줄건지
    const itemsPerPage = 9;

    const formik = useFormik({
        initialValues: {
            search: '', // 검색어 초기값
            sortOption: 'latest', // 정렬 옵션 초기값
        },
        onSubmit: (values) => {
            setSubmittedSearch(values.search); // 검색어 제출
            setCurrentPage(0); // 검색 시 첫 페이지로 이동
        },
    });
    // console.log(selectCategory,'셀렉카테고리')
    const filterData = datas
        .filter((data) => {
            // console.log(data.category,'데이터카테고리확인')
            if (
                selectCategory &&
                selectCategory !== 'all' &&
                data.category !== selectCategory
            ) {
                return false;
            } // 검색어 필터 적용 (작가 이름 또는 제목에 검색어 포함)
            return (
                data.title
                    .toLowerCase() //소문자로 변경(검색비교를위해)
                    .includes(submittedSearch.toLowerCase()) ||
                data.artist.name
                    .toLowerCase()
                    .includes(submittedSearch.toLowerCase())
            );
        })
        .sort((a, b) =>
            // 정렬 옵션에 따라 데이터 정렬
            formik.values.sortOption === 'latest'
                ? b.release - a.release
                : formik.values.sortOption === 'priceAsc'
                ? a.price - b.price
                : formik.values.sortOption === 'priceDesc'
                ? b.price - a.price
                : 0
        );

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

    function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): void {
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
                    onChange={formik.handleChange} // Formik의 handleChange로 입력 관리
                    onKeyDown={handleKeyPress}  // 엔터키로 제출
                    // style={{ width: 200, marginRight: 8 }}
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
                    onChange={formik.handleChange} // 정렬 옵션도 Formik에서 관리
                    className={styles.select}
                >
                    <option value="latest">최신순</option>
                    <option value="priceAsc">낮은가격순</option>
                    <option value="priceDesc">높은가격순</option>
                </select>
            </form>

            <ArtworkListStyled>
                {currentItems.map((x, i) => {
                    return (
                        <ArtworkItem
                            key={x.id}
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
